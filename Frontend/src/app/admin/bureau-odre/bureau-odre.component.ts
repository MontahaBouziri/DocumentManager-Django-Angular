import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BureauOrdreService } from 'src/app/bureau-ordre.service';
@Component({
  selector: 'app-bureau-odre',
  templateUrl: './bureau-odre.component.html',
  styleUrls: ['./bureau-odre.component.css']
})
export class BureauOdreComponent implements OnInit {

  bureauArr: any=[]
  public formExample!: FormGroup  

  constructor(private bureauServ : BureauOrdreService,
              private FB : FormBuilder,) { }

  ngOnInit(): void {
    this.getBureauList()

    this.formExample= this.FB.group({
      nom_Bureau: ['', [ Validators.required, Validators.pattern('[a-zA-Z ]*')   ]],  
      num_Bureau: ['', [ Validators.required, Validators.pattern('[a-zA-Z ]*')   ]]
    })
  }


  getBureauList(){ 
    this.bureauServ.getBureauOrdres().subscribe( 
      data => {
        this.bureauArr=data;
        //console.log(this.typesArr)
    },
    error=>{
      console.log(error);
    }

    );
  }


  postOneBureau(){
    const varpost= {
      nom_Bureau: this.formExample.value.nom_Bureau,
      num_Bureau: this.formExample.value.num_Bureau,
      //documents: []
    }

    /*console.log(data)
    console.log(this.varpost)*/
    console.log(this.formExample.value.nom_Bureau)
    console.log(this.formExample.value.num_Bureau)


    this.bureauServ.postOneBureau(varpost).subscribe( data => {
      this.bureauArr = [...this.bureauArr, data];
    })
  }
}

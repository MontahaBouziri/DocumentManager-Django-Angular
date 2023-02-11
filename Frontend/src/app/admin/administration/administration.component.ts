import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdministrationService } from 'src/app/administration.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})
export class AdministrationComponent implements OnInit {
  searchText:any;

  public formExample!: FormGroup  



  
  AdminArr :any = [] 
  values: any = [] ;
  //typesArr!: any 
  constructor(private adminServ:AdministrationService,
              private router: Router , 
              private route: ActivatedRoute,
              private httpClient: HttpClient,
              private FB : FormBuilder,
             ) {
              //this.postTypeDoc()
    
  }
  ngOnInit(): void {
    this.getAllAdministrations();

    this.formExample= this.FB.group({
      nom_admin: ['', [ Validators.required, Validators.pattern('[a-zA-Z ]*')   ]],  
      type_admin: ['', [ Validators.required, Validators.pattern('[a-zA-Z ]*')   ]]
    })
  }
  getAllAdministrations(){ 
    this.adminServ.getAllAdministrations().subscribe( 
      data => {
        this.AdminArr=data;
        
    },
    error=>{
      console.log(error);
    }

    );
  }

  AdminClicked = (type: { id: any; }) => {
    //console.log(type.id);
    this.adminServ.getOneAdministration(type.id).subscribe(
      data => {
        console.log(data);
        
      },
      error => {
        console.log(error);
      }
    );
  }
  save(){ 
    sessionStorage.setItem('name','help')
  }


/*
  getTypeFormData(data:any){ 
    console.warn(data)
  }
*/
  // constructeur  NomTypeDoc Nbr_pieces
  postOneAdministration(){
    const varpost= {
      nom_admin: this.formExample.value.nom_admin,
      type_admin: this.formExample.value.type_admin,
      //documents: []
    }
    /*console.log(data)
    console.log(this.varpost)*/
    console.log(this.formExample.value.nom_admin)
    console.log(this.formExample.value.type_admin)
    this.adminServ.postOneAdministration(varpost).subscribe( data => {
      this.AdminArr = [...this.AdminArr, data];
    })
  }
  




  deleteOneAdministration(id: any){
    this.adminServ.deleteOneAdministration(id).subscribe(data=> {
      console.log(data) ;
      this.getAllAdministrations();
    })
  }



  //public typeId: number | undefined ;
  onSelect(Administration: { id: any; }) { 
    this.router.navigate([Administration.id ], {relativeTo: this.route}); //Or //this.router.navigate(['/utilisateurs', type.id ]);
    //this.sharedServ.setMessage(type.id);
    
  }
/*
  onSelectmodifier(type: { id: any; }){
    this.router.navigate([type.id ,'/updateType'], {relativeTo: this.route}); //Or //this.router.navigate(['/utilisateurs', type.id ]);
  }
*/

}

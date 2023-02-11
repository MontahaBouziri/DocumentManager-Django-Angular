import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
//import { DocServiceService } from 'src/app/doc-service.service';
//import { TypeDocService } from 'src/app/TypeDoc.service';
import { ServiceService } from 'src/app/service.service';
@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.css'],
  providers:[]
})
export class ServiceDetailComponent implements OnInit {


  serivce_id:any  ;

  service:any= []
  public formExample!: FormGroup  
  typesArr:any = []  

  constructor(private chambreServ: ServiceService,
              private router: Router , 
              private route: ActivatedRoute,
              private httpClient: HttpClient,
              private FB : FormBuilder,
             ) { }

  ngOnInit(): void {
    this.formExample= this.FB.group({
      
      nom_service:['', [ Validators.required, Validators.pattern('[a-zA-Z ]*')   ] ],
      num_serv:['',
      [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(4),
        Validators.pattern(/^-?(0|[1-9]\d*)?$/)
      ]],
      nbre_emp:['',
      [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(4),
        Validators.pattern(/^-?(0|[1-9]\d*)?$/)
      ]],
      type: ['', [ Validators.required, Validators.pattern('[a-zA-Z ]*')   ]],
    })



    this.serivce_id= this.route.snapshot.params['id_serv'] // id du service courant
    


    
    //console.log(this.doc_id)
    //if(this.doc_id === undefined) {return this.doc_id }

    this.getChambre() // retourne un seule document (document courant )
    
  }

  getChambre () {
    
    this.chambreServ.getOneService(this.serivce_id).subscribe(
      data => {
        console.log(data);
        this.service=data
        //console.log(this.document.id)
      },
      error => {
        console.log(error);
      }
    );
  }







  updateOneService () { 
    
    var NewFormData= {
      id: this.formExample.value.id,
      nom_service: this.formExample.value.nom_service,
      num_serv: this.formExample.value.num_serv,
      nbre_emp: this.formExample.value.nbre_emp,
      type: this.formExample.value.type,
    }
    this.chambreServ.putOneService(this.serivce_id, NewFormData).subscribe(data => {
      this.service = data;
    },
    error => {
      console.log(error);
    }
    )
  }
  







}

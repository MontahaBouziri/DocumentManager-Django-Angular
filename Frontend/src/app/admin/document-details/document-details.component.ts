import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdministrationService } from 'src/app/administration.service';
import { DocServiceService } from 'src/app/doc-service.service';
import { ServiceService } from 'src/app/service.service';
import { TypeDocService } from 'src/app/TypeDoc.service';
@Component({
  selector: 'app-document-details',
  templateUrl: './document-details.component.html',
  styleUrls: ['./document-details.component.css'],
  providers:[DocServiceService,TypeDocService]
})
export class DocumentDetailsComponent implements OnInit {
  doc_id:any  ;

  document:any= []
  public formExample!: FormGroup  

  serv_arr:any = [] 
  typesArr:any = []  
  admin_arr :any = []

  constructor(private docServ: DocServiceService,
              private router: Router , 
              private route: ActivatedRoute,
              private httpClient: HttpClient,
              private FB : FormBuilder,
              private typeServ: TypeDocService,
              private service: ServiceService,
              private admin: AdministrationService ) { }

  ngOnInit(): void {
    this.formExample= this.FB.group({
      
      ref:['', [ Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/) ]],
      Etat_archive:['', [ Validators.required, Validators.pattern('[a-zA-Z ]*')   ]],
      nbr_boites:['', [ Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/) ]],
      type_copie: ['', [ Validators.required, Validators.pattern('[a-zA-Z ]*')   ]],
      num_contact:['', [ Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/) ]],
      commentaire:[''],
      id_type :[''],
      id_serv :[''],
      id_admin :[''],
    })


    this.getTypeDocList()// pour la liste déroulante des types
    this.getServiceList()
    this.getAdministrationList()
    
    this.doc_id= this.route.snapshot.params['id_doc'] // id du document courant
    


    
    //console.log(this.doc_id)
    //if(this.doc_id === undefined) {return this.doc_id }

    this.getDocument() // retourne un seule document (document courant )
    
  }

  getDocument () {
    
    this.docServ.getOneDoc(this.doc_id).subscribe(
      data => {
        console.log(data);
        this.document=data
        //console.log(this.document.id)
      },
      error => {
        console.log(error);
      }
    );
  }







  updateOneDoc () { 
    
    var NewFormData= {
      ref: this.formExample.value.ref,
      Etat_archive: this.formExample.value.Etat_archive,
      nbr_boites: this.formExample.value.nbr_boites,
      type_copie: this.formExample.value.type_copie,
      num_contact: this.formExample.value.num_contact,
      commentaire: this.formExample.value.commentaire,
      id_type: this.formExample.value.id_type,
      id_serv: this.formExample.value.id_serv, 
      id_admin : this.formExample.value.id_admin, 
    }
    this.docServ.putOneDoc(this.doc_id, NewFormData).subscribe(data => {
      this.document = data;
    },
    error => {
      console.log(error);
    }
    )
  }




  getTypeDocList(){ 
    this.typeServ.getAllTypeDocs().subscribe( 
      data => {
        this.typesArr=data;
        
    },
    error=>{
      console.log(error);
    }

    );
  }

  getServiceList(){ 
    this.service.getServices().subscribe( 
      data => {
        this.serv_arr=data;
        //console.log(this.serv_arr)
    },
    error=>{
      console.log(error);
    }

    );
  }


/////////////////////////////////////////////////////////////////////////////////////////
  getAdministrationList(){ 
    this.admin.getAllAdministrations().subscribe( 
      data => {
        this.admin_arr=data;
        //console.log(this.serv_arr)
    },
    error=>{
      console.log(error);
    }

    );
  }

}


/*
Hi there!
I'm working on a django+angular project i was trying to fetch some data of a single document using a service!! it works fine but an error appears in the console mentioning : Cannot read properties of undefined (reading 'id')
which blocked me for doing other requests 
i guess the problem was generating after trying to extract the ( id ) from the active url (i'm not sure about it) but here is a picture of the code
can anyone help please? i'm new in angular */
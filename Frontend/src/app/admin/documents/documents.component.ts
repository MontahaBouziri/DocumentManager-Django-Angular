import { HttpClient } from '@angular/common/http';
import { Component, Directive, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DocServiceService } from 'src/app/doc-service.service'; 
import { TypeDocService } from 'src/app/TypeDoc.service';

import { SharedService } from 'src/app/shared.service';
import { ServiceService } from 'src/app/service.service';
import { AdministrationService } from 'src/app/administration.service';


@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css'],
  providers: [DocServiceService,SharedService,TypeDocService]
})
export class DocumentsComponent implements OnInit {
  searchText:any;

  typesArr:any = []  
  serv_arr:any = []  
  admin_arr:any = []
  public formExample!: FormGroup  
  type_doc_id: any;
  
  docArr :any = []  
  documents: any = [] ;

  comptecourant:any
  IdCompteCourant:any
  //Documents:any=[]
  //typesArr!: any 
  constructor(private docServ:DocServiceService,
              private router: Router , 
              private route: ActivatedRoute,
              private httpClient: HttpClient,
              private FB : FormBuilder,
              private typeServ: TypeDocService,
              private service: ServiceService,
              private admin: AdministrationService) { 
              //this.postTypeDoc()
    
  }
  ngOnInit(): void {

    //console.log(this.route.snapshot.params['id']);
    this.type_doc_id= this.route.snapshot.params['id']
    //console.log(this.type_doc_id)
    
    
    this.getDocList();
    this.getTypeDocList();
    this.getServiceList()
    this.getOrganismeList()

    
    //console.log('ya rabi aaweni')
    console.log(this.type_doc_id)
    

    for (let type of this.typesArr) {
      console.log(type.id,'ya rabi aaweni')
      if(this.type_doc_id==type.id){
        this.comptecourant= type.Nom_type
        //this.IdCompteCourant=type.id
        //console.log('ya rabi aaweni')
      }
    }
    //this.message= this.sharedServ.getMessage(); 
    console.log('ya rabi aaweni')
    console.log(this.comptecourant)

    

    this.formExample= this.FB.group({
      id: [''],
      ref:['', [ Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/) ]],
      Etat_archive:['', [ Validators.required, Validators.pattern('[a-zA-Z ]*')   ]],
      nbr_boites:['', [ Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/) ] ],
      type_copie: ['', [ Validators.required, Validators.pattern('[a-zA-Z ]*')   ]],
      num_contact:['', [ Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/) ]],
      commentaire:[''],
      id_type :[''],
      Date_depot: [''],
      Annee_gestion: [''],
      id_serv :[''],
      id_admin :[''],
    })
  }


  getTypeDocList(){ 
    this.typeServ.getAllTypeDocs().subscribe( 
      data => {
        this.typesArr=data;
        //console.log(this.typesArr)
    },
    error=>{
      console.log(error);
    }

    );
  }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
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

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////
  getOrganismeList(){ 
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
  /*
filterIdTypeCourantToGiveItsName(){
    
    for (let document of this.docArr) {
      if(this.type_doc_id==document.id_type){
        this.CompteCourant= document.id_type
      }
    }
    return this.CompteCourant
  }
*/

filterDocList(documents:any){
  let tab =[]
  for (let document of documents) {
    if(this.type_doc_id==document.id_type){ // j'ai eu un problem d'egalite car j'ai fait une affectation 
      tab.push(document)
      console.log(this.type_doc_id)
    }
   
  }
  return tab    
}




  getDocList(){ 
    this.docServ.getAllDocs().subscribe( 
      data => {
        this.docArr=data;
        
    },
    error=>{
      console.log(error);
    }

    );
  }

  docClicked = (doc: { id: any; }) => {
    
    console.log(doc.id);


    this.docServ.getOneDoc(doc.id).subscribe(
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



  // constructeur  NomTypeDoc Nbr_pieces
  postDoc(){
    var varpost= {
      ref: this.formExample.value.ref,
      Etat_archive: this.formExample.value.Etat_archive,
      nbr_boites: this.formExample.value.nbr_boites,
      type_copie: this.formExample.value.type_copie,
      num_contact: this.formExample.value.num_contact,
      commentaire: this.formExample.value.commentaire,
      id_type: this.formExample.value.id_type,
      id_serv: this.formExample.value.id_serv,
      id_admin: this.formExample.value.id_admin,
    }


    /*console.log(data)
    console.log(this.varpost)*/
    console.log(this.formExample.value.ref)
    console.log(this.formExample.value.Etat_archive)
    console.log(this.formExample.value.nbr_boites)
    console.log(this.formExample.value.type_copie)
    console.log(this.formExample.value.num_contact)
    console.log(this.formExample.value.commentaire)
    
    this.docServ.postOneDoc(varpost).subscribe( data => {
      this.docArr = [...this.docArr, data];
    })
  }
  


  deleteDocument(id_doc:any){
    this.docServ.deleteOneDoc(id_doc).subscribe(data => {
      console.log(data) ;
      this.getDocList();
    })
  }






  //public typeId: number | undefined ;
  onSelect(doc: { id: any; }) { 
    this.router.navigate( [doc.id ], {relativeTo: this.route}); //Or //this.router.navigate(['/utilisateurs', type.id ]);
    
  }
  // type variable envoyé de l'html

  
  OnSelectModifierTypeCourant( id: any){
    this.router.navigate([id], {relativeTo: this.route}); //Or //this.router.navigate(['/utilisateurs', type.id ]);
  }


  esmTypeCourant(){
    var comptecourant;
    for (let type of this.typesArr) {
      console.log(type.id,'ya rabi aaweni')
      if(this.type_doc_id==type.id){
        comptecourant= type.Nom_type
        //this.IdCompteCourant=type.id
        //console.log('ya rabi aaweni')
      }
      return comptecourant
    }
  }
}

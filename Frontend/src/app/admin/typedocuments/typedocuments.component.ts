import { HttpClient } from '@angular/common/http';
import { Component, Directive, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TypeDocService } from 'src/app/TypeDoc.service';

import { FormBuilder, FormGroup, NgForm ,FormControl, Validators, AbstractControl} from '@angular/forms';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedService } from 'src/app/shared.service';
import { TokenInterceptorService } from 'src/app/token-interceptor.service';
import { ValidationServiceService } from 'src/app/validation-service.service';

import { ControlMsgAdminComponent } from '../control-msg-admin/control-msg-admin.component';


@Component({
  selector: 'app-typedocuments',
  templateUrl: './typedocuments.component.html',
  styleUrls: ['./typedocuments.component.css'],
  providers: [TypeDocService,SharedService,ValidationServiceService]

})


export class TypedocumentsComponent implements OnInit {
  //@Input() type: any;// type variable envoyé de l'html
  @Directive({
    selector: '[usersForm]',
    exportAs:'ngForm'
  })


  public formExample!: FormGroup  

/*
  formExample= new FormGroup({
    NomTypeDoc: new FormControl('',Validators.required),
    Nbr_pieces: new FormControl('')
  })
  */
  typesArr :any = [] 
  values: any = [] ;
  //typesArr!: any 
  constructor(private typedocServ:TypeDocService,
              private router: Router , 
              private route: ActivatedRoute,
              private httpClient: HttpClient,
              private FB : FormBuilder,
              private sharedServ: SharedService,
              private tokenStorage:TokenInterceptorService) {
              //this.postTypeDoc()
    
  }

  submitted = false;
 
  ngOnInit(): void {
    this.getTypeDocList();

    this.formExample= this.FB.group({
      NomTypeDoc: ['', [ Validators.required, Validators.pattern('[a-zA-Z ]*')   ]],
      Nbr_pieces: ['',
      [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(4),
        Validators.pattern(/^-?(0|[1-9]\d*)?$/)
      ]],

    


    })
  }

 /*******************************************************************************************************
  get f(): { [key: string]: AbstractControl } {
    return this.formExample.controls;
  }
  onSubmit(): void {
    this.submitted = true;
    if (this.formExample.invalid) {
      return;
    }
    console.log(JSON.stringify(this.formExample.value, null, 2));
  }
  onReset(): void {
    this.submitted = false;
    this.formExample.reset();
  }

 /*******************************************************************************************************/


  getTypeDocList(){ 
    this.typedocServ.getAllTypeDocs().subscribe( 
      data => {
        this.typesArr=data;
        
    },
    error=>{
      console.log(error);
    }

    );
  }

  typeClicked = (type: { id: any; }) => {
    //console.log(type.id);
    this.typedocServ.getOnetype(type.id).subscribe(
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
  postTypeDoc(){

    const varpost= {
      Nom_type: this.formExample.controls['NomTypeDoc'].value,
      nbre_pieces: this.formExample.controls['Nbr_pieces'].value,
      documents: []
    }
    


    if (this.formExample.dirty && this.formExample.valid) {
      alert(
        `Type: ${this.formExample.value.NomTypeDoc} nbr de piece:  ${this.formExample.value.Nbr_pieces }`
      );

      this.typedocServ.postOnetype(varpost).subscribe( data => {
        this.typesArr = [...this.typesArr, data];
      })
    }
    else {
      alert(`Type invalide: ${this.formExample.value.NomTypeDoc} nbr de piece invalide:  ${this.formExample.value.Nbr_pieces }`);
    }

    
    /*console.log(data) 
    console.log(this.varpost)*/
    console.log(this.formExample.controls['NomTypeDoc'].value)
    console.log(this.formExample.controls['Nbr_pieces'].value)
    
  }
  




  deleteOneTypeDoc(id: any){
    this.typedocServ.deleteOneType(id).subscribe(data=> {
      console.log(data) ;
      this.getTypeDocList();
    })
  }



  //public typeId: number | undefined ;
  onSelect(type: { id: any; }) { 
    this.router.navigate([type.id ], {relativeTo: this.route}); //Or //this.router.navigate(['/utilisateurs', type.id ]);
    //this.sharedServ.setMessage(type.id);
    
  }
/*
  onSelectmodifier(type: { id: any; }){
    this.router.navigate([type.id ,'/updateType'], {relativeTo: this.route}); //Or //this.router.navigate(['/utilisateurs', type.id ]);
  }
*/

  
}

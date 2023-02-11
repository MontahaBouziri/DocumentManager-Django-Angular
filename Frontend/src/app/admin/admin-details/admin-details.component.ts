import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdministrationService } from 'src/app/administration.service';

@Component({
  selector: 'app-admin-details',
  templateUrl: './admin-details.component.html',
  styleUrls: ['./admin-details.component.css']
})
export class AdminDetailsComponent implements OnInit {

  
  Administration_id:any  ;

  Administration:any= []
  public formExample!: FormGroup  

  constructor(private AdminServ: AdministrationService,
              private router: Router , 
              private route: ActivatedRoute,
              private httpClient: HttpClient,
              private FB : FormBuilder,
             ) { }

  ngOnInit(): void {
    this.formExample= this.FB.group({
      
      nom_admin:['', [ Validators.required, Validators.pattern('[a-zA-Z ]*')   ]],
      type_admin:['', [ Validators.required, Validators.pattern('[a-zA-Z ]*')   ]],
    
    })



    this.Administration_id= this.route.snapshot.params['id'] // id de l'Administration courante
    



    this.getOneAdministration() // retourne une seule Administration ( courante )
    
  }

  getOneAdministration () {
    
    this.AdminServ.getOneAdministration(this.Administration_id).subscribe(
      data => {
        console.log(data);
        this.Administration=data
        //console.log(this.document.id)
      },
      error => {
        console.log(error);
      }
    );
  }







  updateOneAdministration () { 
    
    var NewFormData= {
      id: this.formExample.value.id,
      nom_admin: this.formExample.value.nom_admin,
      type_admin: this.formExample.value.type_admin,
      
    }
    this.AdminServ.updateOneAdministration(this.Administration_id, NewFormData).subscribe(data => {
      this.Administration = data;
    },
    error => {
      console.log(error);
    }
    )
  }
  





}

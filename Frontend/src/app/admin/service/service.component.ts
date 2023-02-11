import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,NgForm, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/service.service';
import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import {  Directive, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { JwtInterceptor } from 'src/app/jwt.interceptor';
import { TokenStorageService } from 'src/app/token-storage.service';


@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css'],
  providers:[ServiceService,{
    provide:HTTP_INTERCEPTORS,
    useClass: JwtInterceptor,
    multi: true
  }],
})
export class ServiceComponent implements OnInit {

  public ServicesArray:any
  public servArr:any = []
  public formExample!: FormGroup;
  constructor(private serv:ServiceService,
              private FB:FormBuilder,
              private router: Router , 
              private route: ActivatedRoute,
              private httpClient: HttpClient,
              private TokenStoreServ:TokenStorageService
              ) { }

  ngOnInit(): void {
    this.getAllServices()

    console.log(this.ServicesArray)
    this.formExample= this.FB.group({
      id: [''],
      nom_service:['' , [ Validators.required, Validators.pattern('[a-zA-Z ]*')   ]],
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
  }

  getAllServices(){
    return this.serv.getServices().subscribe(data =>{
      this.ServicesArray=data
    })
  }

  addOneService(){
    var varpost={
      nom_service:this.formExample.value.nom_service,
      num_serv:this.formExample.value.num_serv,
      nbre_emp:this.formExample.value.nbre_emp,
      type:this.formExample.value.type,
    }
    return this.serv.PostService(varpost).subscribe(data=> {
      this.servArr = [...this.servArr, data];
      this.getAllServices()
    })
  }

  deleteOneService(id:any){
    this.serv.deleteService(id).subscribe(data=>{
      console.log(data) ;
      this.getAllServices()
    })
  }

  DetailService(service:{id:any;}){
    this.router.navigate( [service.id ], {relativeTo: this.route}); //Or //this.router.navigate(['/utilisateurs', type.id ]);

  }


  getUserName(){
    //const nom_user = this.TokenStoreServ.getUserName()
    return this.TokenStoreServ.getUserName()
  }
}

import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {Router , ActivatedRoute, ParamMap} from '@angular/router';
import { UserService } from 'src/app/user.service';
@Component({
  selector: 'app-utilisateurs',
  templateUrl: './utilisateurs.component.html',
  styleUrls: ['./utilisateurs.component.css']
})
export class UtilisateursComponent implements OnInit {

  searchText:any;
  @Input() user: any;// user variable envoyé de l'html


  public userId: number | undefined ;


  
  public formExample!: FormGroup  



  
  UsersArr :any = [] 
  values: any = [] ;
  //typesArr!: any 
  constructor(private userServ:UserService,
              private router: Router , 
              private route: ActivatedRoute,
              private httpClient: HttpClient,
              private FB : FormBuilder,
             ) {
              //this.postTypeDoc()
    
  }
  ngOnInit(): void {
    this.getUsers();

    this.formExample= this.FB.group({
      username: [''],
      Password: [''],
      first_name: [''],
      last_name: [''],
      email: [''],
      is_superuser: [''],
    })
  }
  getUsers(){ 
    this.userServ.getUsers().subscribe( 
      data => {
        this.UsersArr=data;
        
    },
    error=>{
      console.log(error);
    }

    );
  }

  UserClicked = (user: { id: any; }) => {
    //console.log(type.id);
    this.userServ.getUser(user.id).subscribe(
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
  postUser(){
    const varpost= {
      username: this.formExample.value.username,
      Password: this.formExample.value.Password,
      first_name: this.formExample.value.first_name,
      last_name: this.formExample.value.last_name,
      email: this.formExample.value.email,
      is_superuser: this.formExample.value.is_superuser,

      
    }

    /* username: [''],
      Password: [''],
      first_name: [''],
      last_name: [''],
      email: [''],
      is_superuser: [''], */


    /*console.log(data)
    console.log(this.varpost)*/
    console.log(this.formExample.value.username)
    console.log(this.formExample.value.first_name)
    this.userServ.PostUser(varpost).subscribe( data => {
      this.UsersArr = [...this.UsersArr, data];
    })
  }
  




  deleteUser(id: any){
    this.userServ.deleteUser(id).subscribe(data=> {
      console.log(data) ;
      this.getUsers();
    })
  }




  onSelect(user: { id: any; }) { 
    this.router.navigate(['/utilisateurs', user.id ]);
    this.router.navigate([user.id ], {relativeTo: this.route});
  }
  

}

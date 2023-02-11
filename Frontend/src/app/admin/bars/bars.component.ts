import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/token-storage.service';
@Component({
  selector: 'app-bars',
  templateUrl: './bars.component.html',
  styleUrls: ['./bars.component.css']
})
export class BarsComponent implements OnInit {

  constructor(private TokenStoreServ:TokenStorageService) { }
  username: any 
  ngOnInit(): void {
    this.username = this.getUserName()
  }

  deconnexion(){
    this.TokenStoreServ.signOut()
  }

  getUserName(){
    //const nom_user = this.TokenStoreServ.getUserName()
    return this.TokenStoreServ.getUserName()
  }
}

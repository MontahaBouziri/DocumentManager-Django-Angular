import { Component, OnInit } from '@angular/core';
import { ParamMap, Router , ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  public userId: any ;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    
  }

  /*this.route.paramMap.subscribe( (params: ParamMap) => { 
    let id = parseInt(params.get('id'));
    this.userId = id;
  })  */
}

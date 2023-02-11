import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { TypeDocService } from './TypeDoc.service';

@Component({  
  selector: 'app-root',
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css'] ,
  providers: [TypeDocService]

})
export class AppComponent {
    
}

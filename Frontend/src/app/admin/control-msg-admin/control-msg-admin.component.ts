import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ValidationServiceService } from 'src/app/validation-service.service';
@Component({
  selector: 'app-control-msg-admin',
  templateUrl: './control-msg-admin.component.html',
  styleUrls: ['./control-msg-admin.component.css'],
  providers:[ValidationServiceService]
})
export class ControlMsgAdminComponent implements OnInit {


  ngOnInit(): void {
  }


  //public errorMessage!: string ;
  @Input() control: FormControl | any;
  //public control!: any ;


  constructor() {}

  get errorMessage() {
    for (let propertyName in this.control.errors) {
      if (
        this.control.errors.hasOwnProperty(propertyName) &&
        this.control.touched
      ) {
        return ValidationServiceService.getValidatorErrorMessage(
          propertyName,
          this.control.errors[propertyName]
        );
      }
    }

    return null;
  }
}

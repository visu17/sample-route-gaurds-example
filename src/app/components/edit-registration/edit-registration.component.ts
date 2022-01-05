import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import { Registration } from 'src/app/models/registration.model';
import { LocalstorageService } from '../../services/localstorage.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-edit-registration',
  templateUrl: './edit-registration.component.html',
  styleUrls: ['./edit-registration.component.scss']
})
export class EditRegistrationComponent implements OnInit {
  registration: Registration = new Registration();
  registerUserDetails: Array<Registration> = new Array<Registration>();

  @Input() userId: number =0; //input data
  @Output() dataUpadatedFlag:EventEmitter<boolean> = new EventEmitter<boolean>(); // output responce


  constructor(

    private router: Router,
    private localstorageService: LocalstorageService
  ) { }

  ngOnInit(): void {
  }

  ngOnChanges(){
    alert(" child component" + this.userId);
    this.registration= this.localstorageService.getUserRegistrationDataId(this.userId);
  }

  updatedValues(){
    this.localstorageService.updateUserRegistrationDataId(this.userId, this.registration.firstname, this.registration.lastname, this.registration.fullname,
    this.registration.email,  this.registration.password, this.registration.address);
    this.dataUpadatedFlag.emit(true);

  }

}

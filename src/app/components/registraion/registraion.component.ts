import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Registration } from '../../models/registration.model'
import { LocalstorageService } from '../../services/localstorage.service';

@Component({
  selector: 'app-registraion',
  templateUrl: './registraion.component.html',
  styleUrls: ['./registraion.component.scss']
})
export class RegistraionComponent implements OnInit {

  registration: Registration = new Registration();
  registerUserDetails: Array<Registration> = new Array<Registration>();
  isFormSubmitted: boolean = false;
  confirmPassword: string = ""
  isConfirmPasswordMatch: boolean = true;
  pattetn: string = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" 

  constructor(
    private router: Router,
    private localstorageService: LocalstorageService
  ) { }

  ngOnInit(): void { }

  cancel() {
    this.router.navigateByUrl("/viewdetails")

  }

  register() {
    //this.isFormSubmitted = true;
    //if (this.isFormDataValid()) {


      this.registerUserDetails.push(JSON.parse(JSON.stringify(this.registration)));
      this.registration.id = this.registerUserDetails.length;
      // localStorage.setItem("sessionResult KeyValue",JSON.stringify(this.registerUserDetails) );
      // localStorage.getItem("sessionResult KeyValue");
      // this.localstorageService.saveLocalstarage(this.registration);
      //this.router.navigateByUrl("/login");
      // this.localstorageService.saveLocalstarage(this.registration);
      this.localstorageService.saveLocalstarage(this.registration)
      // this.localstorageService.getLocalStorage("serviceResult Service");
    //}
  }

  isFormDataValid(): boolean {
    this.isPasswordMatch();

    if (this.registration.firstname != "" && this.registration.lastname != "" && this.registration.fullname != ""
      && this.registration.email != "" && this.registration.password != "" && this.registration.address != ""
      && this.isConfirmPasswordMatch) {
      return false;
    }
    return true;

  }


  isPasswordMatch() {
    // return this.registration.password==this.confirmPassword? true:false; not required we can approch another way as below
    if (this.registration.password == this.confirmPassword) {
      this.isConfirmPasswordMatch = true;
    }
    else {
      this.isConfirmPasswordMatch = false
    }
  }

}

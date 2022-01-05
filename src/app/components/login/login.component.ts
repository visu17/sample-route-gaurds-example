import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginEmailId: string = "";
  loginPassword: string = "";

  constructor(
    private router:Router,
    private loginService:LoginService
    ) { }

  ngOnInit(): void {
  }

  navigateToRegister(){
    this.router.navigateByUrl("/register")
  }

  // register(){
  //   this.router.navigateByUrl("/register")
  // }

  login() {

    if (this.loginEmailId !== "" && this.loginPassword != "") {
      //need to check the user is exit or not?
      if (this.loginService.checkLoginExit(this.loginPassword, this.loginPassword)) {
        // if user will exit then need to navigate/route to particalr page as Home component
        alert("User Exits..!!");
      }
      else {
        alert("User not exits so please fill the details")
        this.navigateToRegister();
      }
    }
    alert("Plese enter the login Credentials");
  }

}

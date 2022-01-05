import { Injectable } from '@angular/core';
import { Registration } from '../models/registration.model';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }

  saveLocalstarage(userData: Registration) {
    let arrayData = new Array<Registration>();
    for (let items of this.getLocalStorage()) {
      arrayData.push(items);
    }
    userData.id = arrayData.length + 1;
    arrayData.push(userData);
    localStorage.setItem("serviceResult Service", JSON.stringify(arrayData));
  }


  getLocalStorage(): Array<Registration> {
    let tempData = localStorage.getItem("serviceResult Service");
    return (tempData != null && tempData != "") ? JSON.parse(tempData) : new Array<Registration>();
  }

  getUserRegistrationDataId(id: number): Registration {
    let data = this.getLocalStorage();
    let registration = new Registration();
    for (let items of data) {
      if (items.id == id) {
        // return items;
        registration = items;
      }
    }
    return registration
  }

  updateUserRegistrationDataId(id: number, firstname: string, lastname: string, fullname: string, email: string, password: string, address: string) {
    let data = this.getLocalStorage();
    let registration = new Registration();
    for (let items of data) {
      if (items.id == id) {
        items.firstname = firstname;
        items.lastname = lastname;
        items.fullname = fullname;
        items.email = email;
        items.password = password;
        items.address = address;
      }
    }
    this.setRegValue(JSON.stringify(data));
  }

  setRegValue(data: string) {
    localStorage.setItem("serviceResult Service", data);
  }


  //1 --> loggedIn from login screen
  //0--> initaial set 0

  setUserLogedIn(login:number){
    localStorage.setItem("loggedIn", login.toString())
  }

  getUserLogedIn(): string{
  let user= localStorage.getItem("loggedIn");
     return user !=null  ? "1": "0"; 
  }
}

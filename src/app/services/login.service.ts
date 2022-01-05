import { Injectable } from '@angular/core';
import { LocalstorageService } from './localstorage.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private localstorageService:LocalstorageService) { }

  checkLoginExit(password:string, email:string):boolean{
    let regUser = this.localstorageService.getLocalStorage();
    alert(JSON.stringify(regUser));
    for(let items of regUser){
      if(items.password == password && items.email ==email){
        return true;
      }
    }
    return false;
  }
}

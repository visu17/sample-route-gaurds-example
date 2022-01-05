import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { LocalstorageService } from '../services/localstorage.service';

@Injectable({
  providedIn: 'root'
})
export class CanActivateService implements CanActivate {

  constructor(private localstorageService: LocalstorageService) { }

  canActivate(): boolean {
    return this.localstorageService.getUserLogedIn()=="1" ? true : false;
  }
}

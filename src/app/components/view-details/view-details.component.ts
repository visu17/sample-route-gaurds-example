import { Component, OnInit } from '@angular/core';
import { LocalstorageService } from '../../services/localstorage.service';
import { Registration } from '../../models/registration.model';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.scss']
})
export class ViewDetailsComponent implements OnInit {

  userEditId:number =0;

  regUser: Array<Registration> = new Array<Registration>();

  constructor(
    private localstorageService: LocalstorageService,
    private loginService: LoginService
    ) { }

  ngOnInit(): void {
    this.getUserData();
  }

  getUserData():void{
    this.regUser= this.localstorageService.getLocalStorage()
  }

  getUsedId(id:number ):void{
    this.userEditId = id;
    alert(this.userEditId);
  }

  dataUpadated(dataUpadatedFlag:boolean){
    location.reload();
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { LocalstorageService } from '../../services/localstorage.service';

@Component({
  selector: 'app-enquiry-details',
  templateUrl: './enquiry-details.component.html',
  styleUrls: ['./enquiry-details.component.scss']
})
export class EnquiryDetailsComponent implements OnInit {

  isRegister: boolean = false;

  registerUserDetails: Array<any> = new Array<any>();

  // userName:string=""; // variable now 

  // ealier is a variable now it becomes a form controller 
  // enquiryForm = new FormGroup({
  //   userName: new FormControl(''),
  //   email: new FormControl(''),
  //   fullName: new FormControl(''),
  //   phoneNumber: new FormControl(''),
  //   address: new FormControl('')

  // enquiryForm = new FormGroup({
  // userName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
  // email: new FormControl('', Validators.required),
  // fullName: new FormControl('', Validators.required),
  // phoneNumber: new FormControl('', Validators.required),
  // address: new FormControl('', Validators.required)

  // with the help of D.I in from group we need to use FormBuilder

  enquiryForm = this.fb.group({
    userName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
    email: ['', Validators.email],
    fullName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]],
    phoneNumber: ['', [Validators.required, Validators.pattern('^[7-9][0-9]{9}$'), Validators.maxLength(10)]],
    address: ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder,
    private localstorageService:LocalstorageService
    ) { }

  ngOnInit(): void {
  }

  submitData() {
    if (this.enquiryForm.status == "INVALID") {
      alert("fill the required details")
    }
    else {
      this.isRegister = true;
      alert((this.enquiryForm.controls['userName'].value));
      alert((this.enquiryForm.controls['fullName'].value));
      alert((this.enquiryForm.controls['email'].value));
      alert((this.enquiryForm.controls['phoneNumber'].value));
      alert((this.enquiryForm.controls['address'].value));

      // this.localstorageService.getUserLogedIn();
    }
  }

  updateSetData() : any{
     this.enquiryForm.setValue({
       'userName':'vissu',
       'fullName': 'Viswanadh Chejerla',
       'email': 'visu@gmail.com',
       'phoneNumber': 9916455363,
       'address': 'Singapore'
     });
     return true
  }

  updatePatchData(){
     this.enquiryForm.patchValue({
      'userName':'Viswanadh',
      'address': 'Malasiya'
    });
  }


}

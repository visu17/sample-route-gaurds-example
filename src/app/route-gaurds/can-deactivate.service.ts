import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LocalstorageService } from '../services/localstorage.service';
import { CanDeactivate } from '@angular/router';
import { EnquiryDetailsComponent } from '../components/enquiry-details/enquiry-details.component';

@Injectable({
  providedIn: 'root'
})
export class CanDeactivateService implements CanDeactivate<EnquiryDetailsComponent>{

  constructor(
    private router: Router,
    private localstorageService: LocalstorageService
    ) { }

    canDeactivate(component: EnquiryDetailsComponent): boolean {
      return true;
    }
}

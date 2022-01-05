import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { DetailsModule} from './details/details.module'

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegistraionComponent } from './components/registraion/registraion.component';
import { LoginComponent } from './components/login/login.component';
import { ViewDetailsComponent } from './components/view-details/view-details.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { LoginService } from './services/login.service';
import { LocalstorageService } from './services/localstorage.service';
import { EditRegistrationComponent } from './components/edit-registration/edit-registration.component';
import { EnquiryDetailsComponent } from './components/enquiry-details/enquiry-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    RegistraionComponent,
    LoginComponent,
    ViewDetailsComponent,
    PageNotFoundComponent, 
    EditRegistrationComponent, EnquiryDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DetailsModule
  ],
  providers: [LoginService, LocalstorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { RegistraionComponent } from './components/registraion/registraion.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ViewDetailsComponent } from './components/view-details/view-details.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { CanActivateService } from './route-gaurds/can-activate.service';
import { CanDeactivateService } from './route-gaurds/can-deactivate.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistraionComponent},
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent, canDeactivateService: [CanDeactivateService]},
  { path: 'viewdetails', component: ViewDetailsComponent, canActivate:[CanActivateService]},
  { path: 'details', loadChildren: ()=>import('./details/details.module').then(m=>m.DetailsModule) },
  { path: '', component: HomeComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

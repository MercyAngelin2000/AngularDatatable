import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataTableComponent } from './view/data-table/data-table.component';
import { HomeComponent } from './view/home/home.component';
import { LoginComponent } from './view/login/login.component';
import { RegisterComponent } from './view/register/register.component';
import { SchoolProfileComponent } from './view/school-profile/school-profile.component';
import { UserProfileComponent } from './view/user-profile/user-profile.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  
  {path:'register',component:RegisterComponent},
  {path:'home',component:HomeComponent,
    children:[{path:'sclprofile',component:SchoolProfileComponent},
    {path:'table',component:DataTableComponent},
    {path:'userprofile',component:UserProfileComponent}]
    
    }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

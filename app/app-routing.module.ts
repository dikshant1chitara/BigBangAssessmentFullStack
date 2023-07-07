import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { PatientComponent } from './patient/patient.component';
import { DoctorComponent } from './doctor/doctor.component';
import { HomeComponent } from './home/home.component';
import { PatientdashboardComponent } from './patientdashboard/patientdashboard.component';
import { DoctordashboardComponent } from './doctordashboard/doctordashboard.component';
import { doctorauth } from './guards/doctorauth.guard';
import { patientauth } from './guards/patientauth.guard';
import { SignupDoctorComponent } from './doctor/signup-doctor/signup-doctor.component';
import { SignupPatientComponent } from './patient/signup-patient/signup-patient.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SpecializationComponent } from './specialization/specialization.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'dashboard', component:DashboardComponent, canActivate:[AuthGuard]},
  {path:'patient', component:PatientComponent},
  {path:'doctor', component:DoctorComponent},
  {path:'home', component:HomeComponent},
  {path:'patientdashboard', component:PatientdashboardComponent, canActivate:[doctorauth]},
  {path:'doctordashboard', component:DoctordashboardComponent, canActivate:[patientauth]},
  {path:'doctorsignup',component:SignupDoctorComponent},
  {path:'patientsignup',component:SignupPatientComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'contact-us',component:ContactUsComponent},
  {path:'specialization',component:SpecializationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

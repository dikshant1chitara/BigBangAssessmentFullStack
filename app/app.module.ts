import { SignupComponent } from './components/signup/signup.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgToastModule } from 'ng-angular-popup';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { PatientComponent } from './patient/patient.component';
import { DoctorComponent } from './doctor/doctor.component';
import { HomeComponent } from './home/home.component';
import { PatientdashboardComponent } from './patientdashboard/patientdashboard.component';
import { DoctordashboardComponent } from './doctordashboard/doctordashboard.component';
import { DoctortokenInterceptor } from './interceptors/doctortoken.interceptor';
import { PatienttokenInterceptor } from './interceptors/patienttoken.interceptor';
import { SignupDoctorComponent } from './doctor/signup-doctor/signup-doctor.component';
import { SignupPatientComponent } from './patient/signup-patient/signup-patient.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SpecializationComponent } from './specialization/specialization.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    PatientComponent,
    DoctorComponent,
    HomeComponent,
    PatientdashboardComponent,
    DoctordashboardComponent,
    SignupDoctorComponent,
    SignupPatientComponent,
    AboutusComponent,
    ContactUsComponent,
    SpecializationComponent
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgToastModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: DoctortokenInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: PatienttokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import { AuthpatientService } from '../services/authpatient.service';
import { PatientstoreService } from '../services/patientstore.service';
import { ApipatientService } from '../services/apipatient.service';
import { AuthdoctorService } from '../services/authdoctor.service';
import { ApidoctorService } from '../services/apidoctor.service';
import { DoctorstoreService } from '../services/doctorstore.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patientdashboard',
  templateUrl: './patientdashboard.component.html',
  styleUrls: ['./patientdashboard.component.scss']
})
export class PatientdashboardComponent implements OnInit {

  public patient:any = [];
  public role!:string;
  public Doctors:any = [];

  public fullName : string = "";
  constructor(private api : ApipatientService, private auth: AuthpatientService, private userStore: PatientstoreService, 
    private apii:ApidoctorService, private authh:AuthdoctorService, private userStoree:DoctorstoreService, private route:Router ) { }

  ngOnInit() {
    
    this.apii.getUsers()
    .subscribe(res=>{
    this.Doctors = res;
    });

    this.userStoree.getFullNameFromStoredoctor()
    .subscribe(val=>{
      const fullNameFromToken = this.authh.getfullNameFromTokendoctor();
      this.fullName = val || fullNameFromToken
    });

    this.userStoree.getRoleFromStoredoctor()
    .subscribe(val=>{
      const roleFromToken = this.authh.getRoleFromTokendoctor();
      this.role = val || roleFromToken;
    })
  }

  logout(){
    this.auth.signOutpatient();
  }


  redirectToSpecialization() {
    this.route.navigate(['/contact-us']);
  }
  


}

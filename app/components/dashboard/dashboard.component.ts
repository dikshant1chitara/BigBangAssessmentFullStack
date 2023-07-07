import { AuthService } from './../../services/auth.service';
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { UserStoreService } from 'src/app/services/user-store.service';
import { AuthdoctorService } from 'src/app/services/authdoctor.service';
import { ApidoctorService } from 'src/app/services/apidoctor.service';
import { DoctorstoreService } from 'src/app/services/doctorstore.service';
import { PatientstoreService } from 'src/app/services/patientstore.service';
import { ApipatientService } from 'src/app/services/apipatient.service';
import { AuthpatientService } from 'src/app/services/authpatient.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public Doctors:any = [];
  public patient:any = [];
  public users:any = [];
  public role!:string;

  public fullName : string = "";
  constructor(private api : ApiService, private auth: AuthService, private userStore: UserStoreService
    , private apii:ApidoctorService, private authh:AuthdoctorService, private userStoree:DoctorstoreService,
    private apiii:ApipatientService, private authhh:AuthpatientService, private storepatient:PatientstoreService
    ) { }
 
  ngOnInit() {
    this.api.getUsers()
    .subscribe(res=>{
    this.users = res;
    });

    this.userStore.getFullNameFromStore()
    .subscribe(val=>{
      const fullNameFromToken = this.auth.getfullNameFromToken();
      this.fullName = val || fullNameFromToken
    });

    this.userStore.getRoleFromStore()
    .subscribe(val=>{
      const roleFromToken = this.auth.getRoleFromToken();
      this.role = val || roleFromToken;
    })



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





    this.apiii.getUsers()
    .subscribe(res=>{
    this.Doctors = res;
    });

    this.storepatient.getFullNameFromStorepatient()
    .subscribe(val=>{
      const fullNameFromToken = this.authhh.getfullNameFromTokenpatient();
      this.fullName = val || fullNameFromToken
    });

    this.storepatient.getRoleFromStorepatient()
    .subscribe(val=>{
      const roleFromToken = this.authhh.getRoleFromTokenpatient();
      this.role = val || roleFromToken;
    })

  }



  

  logout(){
    this.auth.signOut();
  }
}


import { Component, OnInit } from '@angular/core';
import { AuthdoctorService } from '../services/authdoctor.service';
import { ApidoctorService } from '../services/apidoctor.service';
import { DoctorstoreService } from '../services/doctorstore.service';
@Component({
  selector: 'app-doctordashboard',
  templateUrl: './doctordashboard.component.html',
  styleUrls: ['./doctordashboard.component.scss']
})
export class DoctordashboardComponent implements OnInit {
  public Doctor:any = [];
  public role!:string;
  public fullName : string = "";
  constructor(private api : ApidoctorService, private auth: AuthdoctorService, private userStore: DoctorstoreService) { }

  ngOnInit() {
    this.api.getUsers()
    .subscribe(res=>{
    this.Doctor = res;
    });

    this.userStore.getFullNameFromStoredoctor()
    .subscribe(val=>{
      const fullNameFromToken = this.auth.getfullNameFromTokendoctor();
      this.fullName = val || fullNameFromToken
    });

    this.userStore.getRoleFromStoredoctor()
    .subscribe(val=>{
      const roleFromToken = this.auth.getRoleFromTokendoctor();
      this.role = val || roleFromToken;
    })




  }

  logout(){
    this.auth.signOutdoctor();
  }

}

import { AuthdoctorService } from './../services/authdoctor.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

@Injectable({
  providedIn: 'root'
})
export class doctorauth implements CanActivate {
  constructor(private auth : AuthdoctorService, private router: Router, private toast: NgToastService){

  }
  canActivate():boolean{
    if(this.auth.isLoggedIndoctor()){
      return true
    }else{
      this.toast.error({detail:"ERROR", summary:"Please Login First!"});
      this.router.navigate(['doctor'])
      return false;
    }
  }

}

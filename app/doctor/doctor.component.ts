import { Router } from '@angular/router';
import { AuthdoctorService } from '../services/authdoctor.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import ValidateForm from '../helpers/validationform';
import { NgToastService } from 'ng-angular-popup';
import { DoctorstoreService } from '../services/doctorstore.service';

@Component({
  selector: 'app-login',
  templateUrl: './doctor.component.html',
  styleUrls: ['./Doctor.component.scss'],
})
export class DoctorComponent implements OnInit {
  public loginForm!: FormGroup;
  type: string = 'password';
  isText: boolean = false;
  eyeIcon: string = 'fa-eye-slash';
  constructor(
    private fb: FormBuilder,
    private auth: AuthdoctorService,
    private router: Router,
    private toast: NgToastService,
    private userStore: DoctorstoreService
  ) {}


 
  
  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
}

  hideShowPass() {
    this.isText = !this.isText;
    this.isText ? (this.eyeIcon = 'fa-eye') : (this.eyeIcon = 'fa-eye-slash');
    this.isText ? (this.type = 'text') : (this.type = 'password');
  }
  onSubmitlogin() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      this.auth.signIndoctor(this.loginForm.value).subscribe({
        next: (res) => {
          console.log(res.message);
          this.loginForm.reset();
          this.auth.storeTokendoctor(res.accessToken);
          this.auth.storeRefreshTokendoctor(res.refreshToken);
          const tokenPayload = this.auth.decodedTokendoctor();
          this.userStore.setFullNameForStoredoctor(tokenPayload.name);
          this.userStore.setRoleForStoredoctor(tokenPayload.role);
          this.toast.success({detail:"SUCCESS", summary:res.message, duration: 5000});
          this.router.navigate(['doctordashboard'])
        },
        error: (err) => {
          this.toast.error({detail:"ERROR", summary:"Something when wrong!", duration: 5000});
          console.log(err);
        },
      });
    } else {
      ValidateForm.validateAllFormFields(this.loginForm);
    }
  }


  logout(){
    this.auth.signOutdoctor();
  }


}

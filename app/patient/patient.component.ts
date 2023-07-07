import { Router } from '@angular/router';
import { AuthpatientService } from '../services/authpatient.service'; 
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import ValidateForm from '../helpers/validationform';
import { NgToastService } from 'ng-angular-popup';
import { PatientstoreService } from '../services/patientstore.service';

@Component({
  selector: 'app-login',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss'],
})
export class PatientComponent implements OnInit {
  public loginForm!: FormGroup;
  type: string = 'password';
  isText: boolean = false;
  eyeIcon: string = 'fa-eye-slash';
  constructor(
    private fb: FormBuilder,
    private auth: AuthpatientService,
    private router: Router,
    private toast: NgToastService,
    private userStore: PatientstoreService
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
      this.auth.signInpatient(this.loginForm.value).subscribe({
        next: (res) => {
          console.log(res.message);
          this.loginForm.reset();
          this.auth.storeTokenpatient(res.accessToken);
          this.auth.storeRefreshTokenpatient(res.refreshToken);
          const tokenPayload = this.auth.decodedTokenpatient();
          this.userStore.setFullNameForStorepatient(tokenPayload.name);
          this.userStore.setRoleForStorepatient(tokenPayload.role);
          this.toast.success({detail:"SUCCESS", summary:res.message, duration: 5000});
          this.router.navigate(['patientdashboard'])
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
    this.auth.signOutpatient();
  }
}

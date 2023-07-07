import { Router } from '@angular/router';
import { AuthpatientService } from 'src/app/services/authpatient.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import ValidateForm from 'src/app/helpers/validationform';


@Component({
  selector: 'app-signup-patient',
  templateUrl: './signup-patient.component.html',
  styleUrls: ['./signup-patient.component.scss']
})
export class SignupPatientComponent implements OnInit {


    public signUpForm!: FormGroup;
    type: string = 'password';
    isText: boolean = false;
    eyeIcon:string = "fa-eye-slash"
    constructor(private fb : FormBuilder, private auth: AuthpatientService, private router: Router) { }
  
    ngOnInit() {
      this.signUpForm = this.fb.group({
        firstName:['', Validators.required],
        lastName:['', Validators.required],
        userName:['', Validators.required],
        email:['', Validators.required],
        password:['', Validators.required]
      })
    }
  
    hideShowPass(){
      this.isText = !this.isText;
      this.isText ? this.eyeIcon = 'fa-eye' : this.eyeIcon = 'fa-eye-slash'
      this.isText ? this.type = 'text' : this.type = 'password'
    }
  
    onSubmit() {
      if (this.signUpForm.valid) {
        console.log(this.signUpForm.value);
        let signUpObj = {
          ...this.signUpForm.value,
          role:'',
          token:''
        }
        this.auth.signUppatient(signUpObj)
        .subscribe({
          next:(res=>{
            console.log(res.message);
            this.signUpForm.reset();
            this.router.navigate(['patient']);
            alert(res.message)
          }),
          error:(err=>{
            alert(err?.error.message)
          })
        })
      } else {
        ValidateForm.validateAllFormFields(this.signUpForm); //{7}
      }
    }
  
}

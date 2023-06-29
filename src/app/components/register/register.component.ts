import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms'
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/authService/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  registerForm!:FormGroup

  constructor(
    private formBuilder:FormBuilder,
    private authService:AuthService,
    private toastr:ToastrService,
    private router:Router,
    private http: HttpClient
    ){}

  ngOnInit(): void {
    this.registerForm=this.formBuilder.group({
      name:this.formBuilder.control('',Validators.required),
      email:this.formBuilder.control('',Validators.compose([Validators.required,Validators.email])),
      password:this.formBuilder.control('',Validators.required),
      role:this.formBuilder.control('user')
    })
  }

  

register(){
  if(this.registerForm.valid){
    console.log(this.registerForm.value);
    
    const newUser={
      name:this.registerForm.value.name,
      email:this.registerForm.value.email,
      password:this.registerForm.value.password,
      role:this.registerForm.value.role
    }
    this.http.post('http://localhost:3000/users', newUser)
      .subscribe(response=>{
         this.toastr.success('Registered successfully')
      this.router.navigate(['login'])
      })
  }else{
    this.toastr.warning('Please enter correct details')
  }
}


}


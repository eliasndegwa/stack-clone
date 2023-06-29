import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/authService/auth.service';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService, private toastr: ToastrService, private http: HttpClient) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      name: this.formBuilder.control('', Validators.required),
      password: this.formBuilder.control('', Validators.required),
    })
  }

  login():void {
    if (this.loginForm.valid) {
      const enteredUsername = this.loginForm.value.name;
      const enteredPassword = this.loginForm.value.password;

      this.authService.login(enteredUsername,enteredPassword)
    } else {
      this.toastr.warning('Please enter correct details')
    }
  }

  openModal() {
    const modal = document.querySelector(".modal") as HTMLElement
    if (modal !== null) {
      modal.style.display = 'block'
    }
  }
  closeModal() {
    const modal = document.querySelector(".modal") as HTMLElement
    if (modal !== null) {
      modal.style.display = 'none'
    }
  }
  resetPassword() {
    this.closeModal()
  }
}

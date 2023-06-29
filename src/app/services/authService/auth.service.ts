import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'src/app/Interfaces';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedInSubject: BehaviorSubject<boolean>;
  public isLoggedIn$: Observable<boolean>;

  constructor(private http: HttpClient, private router: Router, private toastr: ToastrService) {
    this.isLoggedInSubject = new BehaviorSubject<boolean>(false);
    this.isLoggedIn$ = this.isLoggedInSubject.asObservable();
  }

  login(username: string, password: string): void {
    this.http.get<User[]>('http://localhost:3000/users')
      .subscribe(
        (users: User[]) => {
          const matchedUser = users.find(user => user.name === username && user.password === password);
          if (matchedUser) {
            // User is authenticated, store the authentication status
            localStorage.setItem('isLoggedIn', 'true');
            this.isLoggedInSubject.next(true);
            this.toastr.success('Logged in successfully')
            this.router.navigate(['/home']);
          } else {
            this.toastr.warning('Please enter correct details')
          }
        },
        (error) => {
          this.toastr.warning('Login failed',error)
        }
      );
  }

  logout(): void {
    localStorage.removeItem('isLoggedIn');
    this.isLoggedInSubject.next(false);
    this.toastr.success('Logged out successfully')
    this.router.navigate(['/login']);
  }
}

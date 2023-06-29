import { Component } from '@angular/core';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/authService/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'stack';


  constructor(private authService: AuthService) { }

  
  logout(): void {
    this.authService.logout();
  }
}

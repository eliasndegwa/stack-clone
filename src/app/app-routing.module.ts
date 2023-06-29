import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { UsersComponent } from './components/users/users.component';
import { AuthGuard } from './guards/auth.guard';
import { LandingComponent } from './components/landing/landing.component';
import { TagsComponent } from './components/tags/tags.component';
import { SingleQuestionComponent } from './components/single-question/single-question.component';

const routes: Routes = [  //,canActivate: [AuthGuard]
  { path: 'home', component: HomeComponent},
  { path: '',component:LandingComponent },
  { path: 'login', component: LoginComponent },
  {path:'register',component:RegisterComponent},
  { path: 'tags', component: TagsComponent},
  { path: 'users', component: UsersComponent},
  { path: 'question/:id', component: SingleQuestionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

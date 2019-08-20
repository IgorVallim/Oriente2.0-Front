import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AreaComponent } from './components/area/area.component';
import { StudentHomeComponent } from './components/student-home/student-home.component';

const routes: Routes = [
  { path: ":user/login", component: LoginComponent },
  { path: "", component: AreaComponent },
  { path: "aluno/home", component: StudentHomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

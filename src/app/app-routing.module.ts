import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/shared/login/login.component';
import { AreaComponent } from './components/shared/area/area.component';
import { StudentHomeComponent } from './components/student/student-home/student-home.component';
import { ProfessorListComponent } from './components/student/professor-list/professor-list.component';
import { FormTccComponent } from './components/student/form-tcc/form-tcc.component';
import { AuthGuardService } from './services/authentication/auth-guard.service';
import { ProjectComponent } from './components/student/project/project.component';
import { StudentProfileComponent } from './components/student/student-profile/student-profile.component';

const routes: Routes = [
  { path: ":user/login", component: LoginComponent },
  { path: "", component: AreaComponent },
  { path: "aluno/:id", component: StudentHomeComponent, canActivate: [AuthGuardService], children: [
      { path: "orientadores", component: ProfessorListComponent },
      { path: "cadastro-tcc/:orientador", component: FormTccComponent },
      { path: "projeto", component: ProjectComponent },
      { path: "perfil", component: StudentProfileComponent }  
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

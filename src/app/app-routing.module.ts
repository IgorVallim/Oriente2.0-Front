import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/shared/login/login.component';
import { AreaComponent } from './components/shared/area/area.component';
import { StudentHomeComponent } from './components/student/student-home/student-home.component';
import { ProfessorListComponent } from './components/student/professor-list/professor-list.component';
import { FormTccComponent } from './components/student/form-tcc/form-tcc.component';
import { AuthGuardService } from './services/authentication/auth-guard.service';
import { ProjectDetailComponent } from './components/shared/project-detail/project-detail.component';
import { StudentProfileComponent } from './components/student/student-profile/student-profile.component';
import { ProfessorHomeComponent } from './components/professor/professor-home/professor-home.component';
import { ProjectListComponent } from './components/professor/project-list/project-list.component';
import { ProfessorProfileComponent } from './components/professor/professor-profile/professor-profile.component';

const routes: Routes = [
  { path: ":user/login", component: LoginComponent },
  { path: "", component: AreaComponent },
  { path: "aluno/:id", component: StudentHomeComponent, canActivate: [AuthGuardService], children: [
      { path: "orientadores", component: ProfessorListComponent },
      { path: "cadastro-tcc/:orientador", component: FormTccComponent },
      { path: "projeto", component: ProjectDetailComponent },
      { path: "perfil", component: StudentProfileComponent }  
  ]},
  { path: "professor/:id", component: ProfessorHomeComponent, canActivate: [AuthGuardService], children: [
      { path: "projetos", component: ProjectListComponent },
      { path: "perfil", component: ProfessorProfileComponent },
      { path: "projeto/:tcc", component: ProjectDetailComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

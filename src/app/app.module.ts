import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavModule, MatToolbarModule, MatIconModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/shared/login/login.component';
import { AreaComponent } from './components/shared/area/area.component';
import { StudentHomeComponent } from './components/student/student-home/student-home.component';
import { StudentMenuComponent } from './components/student/student-menu/student-menu.component';
import { StudentSideMenuComponent } from './components/student/student-side-menu/student-side-menu.component';
import { IconComponent } from './components/utils/icon/icon.component';
import { ProfessorListComponent } from './components/student/professor-list/professor-list.component';
import { ProfessorCardComponent } from './components/student/professor-card/professor-card.component';
import { FormTccComponent } from './components/student/form-tcc/form-tcc.component';
import { AuthGuardService } from './services/authentication/auth-guard.service';
import { ProjectComponent } from './components/student/project/project.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AreaComponent,
    StudentHomeComponent,
    StudentMenuComponent,
    StudentSideMenuComponent,
    IconComponent,
    ProfessorListComponent,
    ProfessorCardComponent,
    FormTccComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatToolbarModule,
    BrowserAnimationsModule, 
    MatIconModule
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }

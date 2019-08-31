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
import { MenuComponent } from './components/student/menu/menu.component';
import { SideMenuComponent } from './components/student/side-menu/side-menu.component';
import { IconComponent } from './components/utils/icon/icon.component';
import { ProfessorListComponent } from './components/student/professor-list/professor-list.component';
import { ProfessorCardComponent } from './components/student/professor-card/professor-card.component';
import { FormTccComponent } from './components/student/form-tcc/form-tcc.component';
import { AuthGuardService } from './services/authentication/auth-guard.service'; 


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AreaComponent,
    StudentHomeComponent,
    MenuComponent,
    SideMenuComponent,
    IconComponent,
    ProfessorListComponent,
    ProfessorCardComponent,
    FormTccComponent
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

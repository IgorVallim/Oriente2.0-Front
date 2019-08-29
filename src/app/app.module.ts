import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavModule, MatToolbarModule, MatIconModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AreaComponent } from './components/area/area.component';
import { StudentHomeComponent } from './components/student-home/student-home.component';
import { MenuComponent } from './components/menu/menu.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { IconComponent } from './components/icon/icon.component';
import { ProfessorListComponent } from './components/professor-list/professor-list.component';
import { ProfessorCardComponent } from './components/professor-card/professor-card.component';
import { FormTccComponent } from './components/form-tcc/form-tcc.component';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

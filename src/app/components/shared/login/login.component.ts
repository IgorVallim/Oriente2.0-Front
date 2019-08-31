import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { ActivatedRoute, Router } from '@angular/router';
import { student, professor } from 'src/app/constants/login';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: FormGroup;
  user: User;
  error: boolean = false;

  constructor(private formBuilder: FormBuilder, private loginService: LoginService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      if(params.get("user")===professor.name){
        this.user = professor;
      }else{
        this.user = student;
      }
    })

    this.login = this.formBuilder.group({
      id: ['', Validators.required],
      password: ['', Validators.required]
    })

  }

  onFormSubmit(){
    if(this.user.name === professor.name){
      this.loginService.loginProfessor(this.login.controls.id.value, this.login.controls.password.value).subscribe(
        response => {
          localStorage.setItem("token", response.headers.get("token"));
          this.router.navigate([this.user.route + response.body.data.id]);
        },
        error => {
          this.error = true;
        }
      );
    }else{
      this.loginService.loginStudent(this.login.controls.id.value, this.login.controls.password.value).subscribe(
        response => {
          localStorage.setItem("token", response.headers.get("token"));
          this.router.navigate([this.user.route + response.body.data.id + "/orientadores"]);
        },
        error => {
          this.error = true;
        }
      );
    }
    
  }
}



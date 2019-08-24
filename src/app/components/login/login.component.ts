import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
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

  constructor(private formBuilder: FormBuilder, private loginService: AuthService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      if(params.get("user")==="professor"){
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
    this.loginService.login(this.login.controls.id.value, this.login.controls.password.value, this.user.api).subscribe(
      response => {
        localStorage.setItem("token", response.headers.get("token"));
        this.router.navigate([this.user.route + response.body.data.id]);
      },
      error => {
        this.error = true;
      }
    );
  }
}



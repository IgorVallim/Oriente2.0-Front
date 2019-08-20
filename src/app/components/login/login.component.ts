import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { User } from 'src/app/models/user';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: FormGroup;
  user: User;
  id: string;
  api: string;

  constructor(private formBuilder: FormBuilder, private loginService: LoginService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      if(params.get("user")==="professor"){
        this.id = "DRT";
        this.api = "login-teacher";
      }else{
        this.id = "TIA";
        this.api = "login";
      }
    })

    this.login = this.formBuilder.group({
      id: ['', Validators.required],
      password: ['', Validators.required]
    })

  }

  onFormSubmit(){
    this.loginService.login(this.login.controls.id.value, this.login.controls.password.value, this.api).subscribe(
      response => {
        this.user = response.data;
        console.log(response);
        this.router.navigate(["/aluno/home"]);
      },
      error => {
        console.log(error);
      }
    );
  }
}



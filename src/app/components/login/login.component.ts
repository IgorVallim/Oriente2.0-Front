import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: FormGroup;
  user: User;

  constructor(private formBuilder: FormBuilder, private loginService: LoginService) { }

  ngOnInit() {

    this.login = this.formBuilder.group({
      tia: ['', Validators.required],
      password: ['', Validators.required]
    })

  }

  onFormSubmit(){
    this.loginService.login(this.login.controls.tia.value, this.login.controls.password.value).subscribe(
      response => {
        this.user = response.data;
        console.log(response);
      }
    );
  }
}



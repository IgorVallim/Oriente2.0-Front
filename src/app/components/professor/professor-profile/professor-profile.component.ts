import { Component } from '@angular/core';
import { Professor } from 'src/app/models/professor';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SafeUrl, DomSanitizer } from '@angular/platform-browser';
import { ProfessorService } from 'src/app/services/professor.service';
import { SessionService } from 'src/app/services/session.service';
import { NgxImageCompressService } from 'ngx-image-compress';

@Component({
  selector: 'app-professor-profile',
  templateUrl: './professor-profile.component.html',
  styleUrls: ['./professor-profile.component.css']
})
export class ProfessorProfileComponent{

  professor: Professor;
  form: FormGroup;
  message: string;
  error: boolean = false;
  success: string;
  photo: SafeUrl;
  changed: boolean = false;

  constructor(private formBuilder: FormBuilder, private professorService: ProfessorService, 
    private sanitizer: DomSanitizer, private sessionService: SessionService,
    private imageCompress: NgxImageCompressService) { 

    this.professor = this.sessionService.getUser();
    if(this.professor.photo) {
      let objectURL = this.professor.photo;
      this.photo = this.sanitizer.bypassSecurityTrustUrl(objectURL);
    }else{
      this.photo = './assets/images/profile.png';
    }

    if(!this.professor.course) this.professor.course = ["Ciência da computação"];

    this.form = this.formBuilder.group({
      name: [this.professor.name, Validators.required],
      drt: [{value: this.professor.drt, disabled: true}],
      email: [this.professor.email, [Validators.required, Validators.email]],
      course: [{value: this.professor.course[0], disabled: true}],
      photo: ['']
    });
  }

  submit(){
    this.message = "";
    this.error = false;
    if(!this.form.valid){
      this.showError();
      return;
    }else{
      this.professor.name = this.form.controls.name.value;
      this.professor.email = this.form.controls.email.value;
      if(this.changed) this.professor.photo = this.photo.toString();
      this.professorService.update(this.professor, this.sessionService.getToken()).subscribe(
        success => {  
          this.showSuccess();
          let user = this.professor;
          this.sessionService.updateUser(user);
        },
        error => {
          this.showError();
        }
      );
    }
  }

  showError(){
    this.error = true;
    if(!this.form.controls.name.valid){
      this.message = "O campo nome é obrigatório!";
      return;
    }

    if(!this.form.controls.email.valid){
      this.message = "O e-mail digitado é inválido!";
      return;  
    }

    this.message = "Ocorreu um erro ao editar seu perfil, tente novamente mais tarde."
  }

  showSuccess(){
    this.message = "Perfil editado com sucesso!";
  }

  upload() {
    this.imageCompress.uploadFile().then(({ image, orientation }) => {

      this.imageCompress.compressFile(image, orientation, 30, 30).then(
        result => {
          this.photo = result;
          this.changed = true;
        }
      );

    });
  }

}

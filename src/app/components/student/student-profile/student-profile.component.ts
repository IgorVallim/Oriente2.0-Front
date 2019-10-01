import { Component } from '@angular/core';
import { Student } from 'src/app/models/student';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StudentService } from 'src/app/services/student.service';
import { SafeUrl, DomSanitizer } from '@angular/platform-browser';
import { SessionService } from 'src/app/services/session.service';
import { NgxImageCompressService } from 'ngx-image-compress';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent {

  student: Student;
  form: FormGroup;
  message: string;
  error: boolean = false;
  success: string;
  photo: SafeUrl;
  changed: boolean = false;

  constructor(private formBuilder: FormBuilder, private studentService: StudentService,
    private sanitizer: DomSanitizer, private sessionService: SessionService,
    private imageCompress: NgxImageCompressService) {

    this.student = this.sessionService.getUser();
    if (this.student.photo) {
      let objectURL = this.student.photo;
      this.photo = this.sanitizer.bypassSecurityTrustUrl(objectURL);
    } else {
      this.photo = './assets/images/profile.png';
    }

    this.form = this.formBuilder.group({
      name: [this.student.name, Validators.required],
      tia: [{ value: this.student.tia, disabled: true }],
      email: [this.student.email, [Validators.required, Validators.email]],
      course: [{ value: this.student.course, disabled: true }],
      photo: ['']
    });
  }

  submit() {
    this.message = "";
    this.error = false;
    if (!this.form.valid) {
      this.showError();
      return;
    } else {
      this.student.name = this.form.controls.name.value;
      this.student.email = this.form.controls.email.value;
      if(this.changed) this.student.photo = this.photo.toString();
      this.studentService.update(this.student, this.sessionService.getToken()).subscribe(
        success => {
          this.showSuccess();
          let user = this.student;
          this.sessionService.updateUser(user);
        },
        error => {
          this.showError();
        }
      );
    }
  }

  showError() {
    this.error = true;
    if (!this.form.controls.name.valid) {
      this.message = "O campo nome é obrigatório!";
      return;
    }

    if (!this.form.controls.email.valid) {
      this.message = "O e-mail digitado é inválido!";
      return;
    }

    this.message = "Ocorreu um erro ao editar seu perfil, tente novamente mais tarde."
  }

  showSuccess() {
    this.message = "Perfil editado com sucesso!";
  }

  upload() {
    this.imageCompress.uploadFile().then(({ image, orientation }) => {

      this.imageCompress.compressFile(image, orientation, 30, 30).then(
        result => {
          this.photo = result;
          this. changed = true;
        }
      );

    });
  }

  
}

import { Component, OnInit } from '@angular/core';
import { Professor } from 'src/app/models/professor';
import { ProfessorService } from 'src/app/services/professor.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { StudentService } from 'src/app/services/student.service';
import { Student } from 'src/app/models/student';

@Component({
  selector: 'app-form-tcc',
  templateUrl: './form-tcc.component.html',
  styleUrls: ['./form-tcc.component.css']
})
export class FormTccComponent implements OnInit {

  professor: Professor;
  student: Student;
  form: FormGroup;

  constructor(private professorService: ProfessorService, private route: ActivatedRoute, private formBuilder: FormBuilder, private studentService: StudentService) { }

  ngOnInit() {

    this.form = this.formBuilder.group({
      theme: ['', Validators.required],
      description: ['', Validators.required]
    });

    this.route.params.subscribe(
      params => {
        this.professorService.getDetail(params["orientador"], localStorage.getItem("token")).subscribe(
            response => {
              this.professor = response.data;
              let advisor = new FormControl({ value: this.professor.name, disabled: true }, Validators.required);
              this.form.addControl("advisor", advisor);
            }
        ); 
      }
    );

    this.route.parent.params.subscribe(
      params => {
        this.studentService.getDetail(params["id"], localStorage.getItem("token")).subscribe(
          response => {
            this.student = response.data;
            let student = new FormControl({ value: this.student.name, disabled: true }, Validators.required);
            this.form.addControl("student-01", student);
          }
      );
      }
    );
  }

}

import { Component, OnInit } from '@angular/core';
import { Professor } from 'src/app/models/professor';
import { ProfessorService } from 'src/app/services/professor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { StudentService } from 'src/app/services/student.service';
import { Student } from 'src/app/models/student';
import { TCC } from 'src/app/models/tcc';
import { TccService } from 'src/app/services/tcc.service';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-form-tcc',
  templateUrl: './form-tcc.component.html',
  styleUrls: ['./form-tcc.component.css']
})
export class FormTccComponent implements OnInit {

  professor: Professor;
  student: Student;
  form: FormGroup;
  groupSize: number = 1;
  error: string;
  tcc: TCC;

  constructor(private professorService: ProfessorService, private route: ActivatedRoute, private formBuilder: FormBuilder,
    private studentService: StudentService, private tccService: TccService, private router: Router,
    private sessionService: SessionService) { }

  ngOnInit() {

    this.form = this.formBuilder.group({
      theme: ['', Validators.required],
      description: ['', Validators.required]
    });

    let student2 = new FormControl("");
    let student3 = new FormControl("");
    let student4 = new FormControl("");
    this.form.addControl("student2", student2);
    this.form.addControl("student3", student3);
    this.form.addControl("student4", student4);

    this.route.params.subscribe(
      params => {
        this.professorService.getDetail(params["orientador"], this.sessionService.getToken()).subscribe(
          response => {
            this.professor = response.data;
            let advisor = new FormControl({ value: this.professor.name, disabled: true }, Validators.required);
            this.form.addControl("advisor", advisor);
          }
        );
      }
    );

    this.student = this.sessionService.getUser();
    let leader = new FormControl({ value: this.student.tia, disabled: true }, Validators.required);
    this.form.addControl("student1", leader);
  }

  addMember() {
    this.groupSize++;
  }

  submit() {

    if(!this.form.valid){
      this.showError();
      return;
    }else{
      this.error = "";
    this.tcc = new TCC();
    this.tcc.students = [];
    this.tcc.tccStage = "Tcc1"; //Deixar dinamico
    this.tcc.rudderId = this.professor.id;
    this.tcc.course = this.student.course;
    this.tcc.theme = this.form.controls.theme.value;
    this.tcc.description = this.form.controls.description.value;

    let students: string[] = [];
    students.push(this.form.controls.student1.value);
    if (this.form.controls.student2.value !== "" && !students.includes(this.form.controls.student2.value))
      students.push(this.form.controls.student2.value);
    if (this.form.controls.student3.value !== "" && !students.includes(this.form.controls.student3.value))
      students.push(this.form.controls.student3.value);
    if (this.form.controls.student4.value !== "" && !students.includes(this.form.controls.student4.value))
      students.push(this.form.controls.student4.value);

    let counter = 0;

    students.forEach(function (item) {
      if (Number(item)) {
        this.studentService.getByTia(item, this.sessionService.getToken()).subscribe(
          response => {
            if (response.data.tccId === null) {
              this.tcc.students.push(response.data.id);
            }
            else {
              this.alreadyRegisteredMessage(item);
              return;
            }
            if (counter === students.length - 1) {
              this.tccService.createTcc(this.tcc, this.sessionService.getToken()).subscribe(
                response => {
                  this.student.tccId = response.data.id;
                  let user = this.student;
                  this.sessionService.updateUser(user);
                  this.router.navigate(["../../projeto"], { relativeTo: this.route }); 
                },
                error => {
                  this.error = "Erro ao cadastrar o TCC, tente novamente mais tarde.";
                }
              );
            } else {
              counter++;
            }
          },
          error => {
            this.invalidTiaMessage(item);
            return;
          }
        );
      } else {
        this.invalidTiaMessage(item);
        return;
      }
    }.bind(this));
    }
    

  }

  invalidTiaMessage(tia: string) {
    this.error = "O TIA " + tia + " é inválido!";
  }

  requiredMessage(field: string) {
    this.error = "O campo " + field + "é obrigatório!";
  }

  alreadyRegisteredMessage(tia: string) {
    this.error = "O aluno " + tia + " já possui TCC cadastrado!";
  }

  showError(){
    if (!this.form.controls.theme.valid) {
      this.requiredMessage("tema");
      return;
    }

    if (!this.form.controls.description.valid) {
      this.requiredMessage("descrição");
      return;
    }
  }
}

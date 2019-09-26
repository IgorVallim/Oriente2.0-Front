import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';
import { Student } from 'src/app/models/student';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-student-home',
  templateUrl: './student-home.component.html',
  styleUrls: ['./student-home.component.css']
})
export class StudentHomeComponent implements OnInit {

  student: Student;

  constructor(private route: ActivatedRoute, private studentService: StudentService, private router: Router,
    private sessionService: SessionService) { }

  ngOnInit() {

    this.route.params.subscribe(
      params => {
        this.studentService.getDetail(params['id'], this.sessionService.getToken()).subscribe(
          response => {
            this.student = response.data;
            this.sessionService.updateUser(response.data);
            if(response.data.tccId === null){
              this.router.navigate(["orientadores"], { relativeTo: this.route });
            }else{
              this.router.navigate(["projeto"], { relativeTo: this.route });
            }
          }
        );
      }
    );
  }

}

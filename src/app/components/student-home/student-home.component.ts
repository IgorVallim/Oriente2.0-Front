import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student-home',
  templateUrl: './student-home.component.html',
  styleUrls: ['./student-home.component.css']
})
export class StudentHomeComponent implements OnInit {

  constructor(private route: ActivatedRoute, private studentService: StudentService) { }

  ngOnInit() {

    this.route.params.subscribe(
      params => {
        this.studentService.getDetails(params['id'], localStorage.getItem("token")).subscribe(
          response => console.log(response)
        );
      }
    );
  }

}

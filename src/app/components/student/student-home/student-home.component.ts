import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student-home',
  templateUrl: './student-home.component.html',
  styleUrls: ['./student-home.component.css']
})
export class StudentHomeComponent implements OnInit {

  constructor(private route: ActivatedRoute, private studentService: StudentService, private router: Router) { }

  ngOnInit() {

    this.route.params.subscribe(
      params => {
        this.studentService.getDetail(params['id'], localStorage.getItem("token")).subscribe(
          response => {
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

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/models/student';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-student-side-menu',
  templateUrl: './student-side-menu.component.html',
  styleUrls: ['./student-side-menu.component.css']
})
export class StudentSideMenuComponent implements OnInit {

  @Input() student: Student;
  @Output() sidenavClose = new EventEmitter();

  constructor(private router: Router, private route: ActivatedRoute, private sessionService: SessionService) { 
    this.sessionService.changeEmitted$.subscribe(
      response => {
        this.student = response;
      }
    );
  }

  ngOnInit() {
  }

  logout(){
    this.sessionService.logout();
    this.router.navigate([""]);
  }

  editProfile(){
    this.router.navigate(["perfil"], {relativeTo: this.route});
    this.sidenavClose.emit();
  }

  goHome(){
    let student = this.sessionService.getUser();
    if(student.tccId){
      this.router.navigate(["projeto"], {relativeTo: this.route});
    }else{
      this.router.navigate(["orientadores"], {relativeTo: this.route});
    }
    this.sidenavClose.emit();
  }
}

import { Component, EventEmitter, Output, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/models/student';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-student-menu',
  templateUrl: './student-menu.component.html',
  styleUrls: ['./student-menu.component.css']
})
export class StudentMenuComponent{

  @Output() sidenavToggle = new EventEmitter();
  @Input() student: Student;

  constructor(private router: Router, private route: ActivatedRoute, private sessionService: SessionService){
    this.sessionService.changeEmitted$.subscribe(
      response => {
        this.student = response;
      }
    );
    
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

  logout(){
    this.sessionService.logout();
    this.router.navigate([""]);
  }

  goHome(){
    let student = this.sessionService.getUser();
    if(student.tccId){
      this.router.navigate(["projeto"], {relativeTo: this.route});
    }else{
      this.router.navigate(["orientadores"], {relativeTo: this.route});
    }
  }

  editProfile(){
    this.router.navigate(["perfil"], {relativeTo: this.route});
  }

}

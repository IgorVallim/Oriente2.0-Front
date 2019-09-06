import { Component, EventEmitter, Output, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/models/student';

@Component({
  selector: 'app-student-menu',
  templateUrl: './student-menu.component.html',
  styleUrls: ['./student-menu.component.css']
})
export class StudentMenuComponent{

  @Output() sidenavToggle = new EventEmitter();
  @Input() student: Student;

  constructor(private router: Router, private route: ActivatedRoute){}

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

  logout(){
    localStorage.clear();
    this.router.navigate([""]);
  }

  editProfile(){
    this.router.navigate(["perfil"], {relativeTo: this.route});
  }

}

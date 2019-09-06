import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/models/student';

@Component({
  selector: 'app-student-side-menu',
  templateUrl: './student-side-menu.component.html',
  styleUrls: ['./student-side-menu.component.css']
})
export class StudentSideMenuComponent implements OnInit {

  @Input() student: Student;
  @Output() sidenavClose = new EventEmitter();

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  logout(){
    localStorage.clear();
    this.router.navigate([""]);
  }

  editProfile(){
    this.router.navigate(["perfil"], {relativeTo: this.route});
    this.sidenavClose.emit();
  }
}

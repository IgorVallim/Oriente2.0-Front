import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Professor } from 'src/app/models/professor';
import { Router, ActivatedRoute } from '@angular/router';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-professor-side-menu',
  templateUrl: './professor-side-menu.component.html',
  styleUrls: ['./professor-side-menu.component.css']
})
export class ProfessorSideMenuComponent {

  @Input() professor: Professor;
  @Output() sidenavClose = new EventEmitter();

  constructor(private router: Router, private route: ActivatedRoute, private sessionService: SessionService) {
    this.sessionService.changeEmitted$.subscribe(
      response => {
        this.professor = response;
      }
    );
  }

  logout() {
    this.sessionService.logout();
    this.router.navigate([""]);
  }

  editProfile() {
    this.router.navigate(["perfil"], { relativeTo: this.route });
    this.sidenavClose.emit();
  }

  goHome() {
    this.router.navigate(["projetos"], { relativeTo: this.route });
    this.sidenavClose.emit();
  }

}

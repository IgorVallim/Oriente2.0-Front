import { Component, EventEmitter, Output, Input } from '@angular/core';
import { Professor } from 'src/app/models/professor';
import { Router, ActivatedRoute } from '@angular/router';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-professor-menu',
  templateUrl: './professor-menu.component.html',
  styleUrls: ['./professor-menu.component.css']
})
export class ProfessorMenuComponent{

  @Output() sidenavToggle = new EventEmitter();
  @Input() professor: Professor;

  constructor(private router: Router, private route: ActivatedRoute, private sessionService: SessionService){
    this.sessionService.changeEmitted$.subscribe(
      response => {
        this.professor = response;
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
    this.router.navigate(["projetos"], {relativeTo: this.route});
  }

  editProfile(){
    this.router.navigate(["perfil"], {relativeTo: this.route});
  }

}

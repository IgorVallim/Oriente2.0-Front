import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from 'src/app/services/session.service';
import { Professor } from 'src/app/models/professor';
import { ProfessorService } from 'src/app/services/professor.service';

@Component({
  selector: 'app-professor-home',
  templateUrl: './professor-home.component.html',
  styleUrls: ['./professor-home.component.css']
})
export class ProfessorHomeComponent implements OnInit {

  professor: Professor;

  constructor(private route: ActivatedRoute, private router: Router,
    private sessionService: SessionService, private professorService: ProfessorService) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.professorService.getDetail(params['id'], this.sessionService.getToken()).subscribe(
          response => {
            this.professor = response.data;
            this.sessionService.updateUser(response.data);
            this.router.navigate(["projetos"], {relativeTo: this.route});
          }
        );
      }
    );
  }

}

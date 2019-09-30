import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/services/session.service';
import { TccService } from 'src/app/services/tcc.service';
import { TCC } from 'src/app/models/tcc';

@Component({
  selector: 'app-projects',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  tccs: TCC[];

  constructor(private tccService: TccService, private sessionService: SessionService) { }

  ngOnInit() {
    this.tccService.getByTeacher(this.sessionService.getToken()).subscribe(
      response => {
        this.tccs = response.data.items;
      }
    );
  }

}

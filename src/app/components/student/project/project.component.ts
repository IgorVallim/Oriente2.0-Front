import { Component, OnInit } from '@angular/core';
import { TccService } from 'src/app/services/tcc.service';
import { TCC } from 'src/app/models/tcc';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  tcc: any;

  constructor(private tccService: TccService, private sessionService: SessionService) { }

  ngOnInit() {
    let student = this.sessionService.getUser();
    this.tccService.getDetail(student.tccId, this.sessionService.getToken()).subscribe( 
      response => {
        this.tcc = response.data;
      }
    );
  }

}

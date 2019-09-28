import { Component, OnInit } from '@angular/core';
import { TccService } from 'src/app/services/tcc.service';
import { TCC } from 'src/app/models/tcc';
import { SessionService } from 'src/app/services/session.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {

  tcc: any;
  id: number;

  constructor(private tccService: TccService, private sessionService: SessionService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.params.subscribe(
      params => {
        if (params["tcc"]) {
          this.tccService.getDetail(params["tcc"], this.sessionService.getToken()).subscribe(
            response => {
              this.tcc = response.data;
            }
          );
        } else {
          let student = this.sessionService.getUser();
          this.tccService.getDetail(student.tccId, this.sessionService.getToken()).subscribe(
            response => {
              this.tcc = response.data;
            }
          );
        }
      }
    );

  }

}

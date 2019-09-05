import { Component, OnInit } from '@angular/core';
import { TccService } from 'src/app/services/tcc.service';
import { TCC } from 'src/app/models/tcc';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  tcc: TCC;

  constructor(private tccService: TccService) { }

  ngOnInit() {
    this.tccService.getDetail(1, localStorage.getItem("token")).subscribe( //Passar id do TCC do aluno
      response => {
        this.tcc = response.data;
      }
    );
  }

}

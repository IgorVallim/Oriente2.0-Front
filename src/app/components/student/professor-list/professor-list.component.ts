import { Component, OnInit } from '@angular/core';
import { ProfessorService } from 'src/app/services/professor.service';
import { Professor } from 'src/app/models/professor';

@Component({
  selector: 'app-professor-list',
  templateUrl: './professor-list.component.html',
  styleUrls: ['./professor-list.component.css']
})
export class ProfessorListComponent implements OnInit {

  professors: Professor[];
  hasMore: boolean;

  constructor(private professorService: ProfessorService) { 
    
  }

  ngOnInit() {
    this.professorService.getList(localStorage.getItem("token")).subscribe(
       response => {
          this.professors = response.data.items;
          this.hasMore = response.data.hasMore;
       } 
    );
  }

}

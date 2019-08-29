import { Component, OnInit, Input } from '@angular/core';
import { Professor } from 'src/app/models/professor';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-professor-card',
  templateUrl: './professor-card.component.html',
  styleUrls: ['./professor-card.component.css']
})
export class ProfessorCardComponent implements OnInit {

  @Input() professor: Professor;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  openForm(){
    this.router.navigate(["../cadastro-tcc"], { relativeTo: this.route });
  }

}

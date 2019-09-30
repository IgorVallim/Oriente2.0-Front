import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TCC } from 'src/app/models/tcc';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent implements OnInit {

  @Input() tcc: TCC;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  getDetail(){
    this.router.navigate(["../projeto/" + this.tcc.id], {relativeTo: this.route});
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  redirect(path: string){
    this.router.navigate(["/"+path+"/login"]);
  }

}

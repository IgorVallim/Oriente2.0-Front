import { Component, OnInit, Input } from '@angular/core';
import { Professor } from 'src/app/models/professor';
import { Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-professor-card',
  templateUrl: './professor-card.component.html',
  styleUrls: ['./professor-card.component.css']
})
export class ProfessorCardComponent implements OnInit {

  @Input() professor: Professor;
  image: SafeUrl;

  constructor(private router: Router, private route: ActivatedRoute, private sanitizer: DomSanitizer) { }

  //metodo que é chamado toda vez que o componente conclui a sua realização
  ngOnInit() {
    if(this.professor.photo){
      let objectURL = 'data:image/jpeg;base64,' + this.professor.photo;
      this.image = this.sanitizer.bypassSecurityTrustUrl(objectURL);
    }else{
      this.image = "./assets/images/profile.png";
    }
   
  }

  openForm(){
    this.router.navigate(["../cadastro-tcc/" + this.professor.id], { relativeTo: this.route });
  }

}

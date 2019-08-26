import { Component, OnInit, Input } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent implements OnInit {

  @Input() icon: string;
  @Input() color: string;

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) { 
    
  }

  ngOnInit() {

    this.matIconRegistry.addSvgIcon(
      this.icon,
      this.domSanitizer.bypassSecurityTrustResourceUrl("./assets/icons/"+this.icon+".svg")
    );

  }

  setColor(){

    return { "color": this.color }
  }

}

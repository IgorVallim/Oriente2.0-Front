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
  @Input() size: number;

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) { 
    
  }

  ngOnInit() {

    this.matIconRegistry.addSvgIcon(
      this.icon,
      this.domSanitizer.bypassSecurityTrustResourceUrl("./assets/icons/"+this.icon+".svg")
    );

  }

  setStyle(){

    return { "color": this.color, "width": this.size + "px", "height": this.size + "px"}
  }

}

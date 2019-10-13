import { Component } from '@angular/core';

@Component({/**todo componente é uma classe em TypeScript mas que é anotada como @ */
  selector: 'app-root',/**Define como será a tag html.(No index html é utilizado essa tag por exemplo)*/
  templateUrl: './app.component.html',/**Define qual a visão do componente */
  styleUrls: ['./app.component.css']/**Define qual o arquivo que contém os estilos que são aplicados a este componente (AppComponent)*/

})
export class AppComponent {
  /**Está definindo a classe TypeScript que referencia  esse componente */
  title = 'Oriente';
}

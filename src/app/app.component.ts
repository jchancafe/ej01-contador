import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  nombre: string = 'Contador';
  contador: number = 0;

  add() {
    this.contador++;
  }

  dis(){
    this.contador--;
  }

}

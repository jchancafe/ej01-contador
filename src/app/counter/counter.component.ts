import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './counter.component.html',
})
export class CounterComponent {
  nombre: string = 'Contador';

  contador: number = 0;

  handleCount(value : number){
    this.contador = value;
  }

  handleDis(value : number){
    this.contador = value;
  }
}

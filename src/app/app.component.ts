import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ejemplo-01-angular';
  nombre:string = 'Joseline'; 
  aPaterno:string = 'Gómez';
  calculaDoble(x:number):number {
    return x*2
  }
    
  
}

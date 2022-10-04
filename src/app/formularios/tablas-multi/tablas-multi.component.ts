import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tablas-multi',
  templateUrl: './tablas-multi.component.html',
  styleUrls: ['./tablas-multi.component.css']
})
export class TablasMultiComponent implements OnInit { 

  constructor() { }
  num1: string = ''
  
  resultado: string [ ] = []
  multiplicar(): void {
    for(let i =1 ; i <= 10 ; i++ ){

      this.resultado.push(`${i } * ${this.num1} =  ${parseInt(this.num1)*i}`) 
    }
  }

  ngOnInit(): void {
  }

}

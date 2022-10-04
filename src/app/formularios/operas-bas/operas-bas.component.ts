import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  templateUrl: './operas-bas.component.html',
  styleUrls: ['./operas-bas.component.css']
})
export class OperasBasComponent implements OnInit {

  num1: string = ''
  num2: string = ''
  resultado: number = 0
  sumar(): void {
    this.resultado= parseInt(this.num1)+parseInt(this.num2)
  }


  constructor() { }

  ngOnInit(): void {
  }

}

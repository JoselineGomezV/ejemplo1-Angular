import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produc-list',
  templateUrl: './produc-list.component.html',
  styleUrls: ['./produc-list.component.css']
})
export class ProducListComponent implements OnInit {

  imagenWidth: number = 100;
  imagenMargin:number = 2
  mostrarImg: boolean = true
  filtro: string = ''  
   constructor() { }
  
  showImage():void {
    this.mostrarImg = !this.mostrarImg
  }

  ngOnInit(): void {
  }
  productos:any[] = [
    {
      productName: 'Versa1',
      descripcion: 'cuatro puertas, familiar',
      productId: 1,
      year: 'Febrero 203 2022',
      marca: 'Nissan',
      precio: 120000,
      color: 'Azul',
      imagenUrl: 'https://acroadtrip.blob.core.windows.net/catalogo-imagenes/m/RT_V_73f1a84de2f9425a86cdc0f1b34c7dd3.jpg' 
    },
    {
      productId: 2,
      productName: 'Versa2',
      descripcion: 'cuatro puertas, familiar',
      year: 'Febrero 203 2022',
      marca: 'Nissan',
      precio: 124000,
      color: 'Azul',
      imagenUrl: 'https://acroadtrip.blob.core.windows.net/catalogo-imagenes/m/RT_V_73f1a84de2f9425a86cdc0f1b34c7dd3.jpg' 
    },
    {
      productId: 3,
      productName: 'Versa3',
      descripcion: 'cuatro puertas, familiar',
      year: 'Febrero 203 2022',
      marca: 'Nissan',
      precio: 138000,
      color: 'Azul',
      imagenUrl: 'https://acroadtrip.blob.core.windows.net/catalogo-imagenes/m/RT_V_73f1a84de2f9425a86cdc0f1b34c7dd3.jpg' 
    }
  ]


}

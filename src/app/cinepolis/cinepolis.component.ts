import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css']
})
export class CinepolisComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  total:number=0;
  desc:number=0;
  error:string='';
  comprador:number=2;
  nombre:any;
  boletos:any;
  tarjeta:any;

  procesar(){
    if(this.comprador == 1){
    if(this.tarjeta == 1){
      if(this.boletos <= 2){
        this.desc = (this.boletos*12) * 0.10;
        this.total = (this.boletos * 12) - this.desc;
      }
      else if(this.boletos <= 5){
        this.desc = (this.boletos*12) * 0.20;
        this.total = (this.boletos * 12) - this.desc;
      }
      else if(this.boletos<= 7){
        this.desc = (this.boletos*12) * 0.25;
        this.total = (this.boletos * 12) - this.desc;
      }
      else if(this.boletos > 7){
        this.error=('Solo tienes permitido 7 boletos por persona');
      }
    }
    else if(this.tarjeta == 0){
      if(this.boletos <= 2){
        this.total = this.boletos * 12;
      }
      else if(this.boletos <= 5){
        this.desc = (this.boletos * 12) * 0.10;
        this.total = (this.boletos * 12) - this.desc;
      }
      else if(this.boletos<= 7){
        this.desc = (this.boletos*12) * 0.15;
        this.total = (this.boletos * 12) - this.desc;
      }
      else if(this.boletos > 7){
        this.error=('Solo tienes permitido 7 boletos por persona');
      }
    }
    }
    else if(this.comprador == 2){
      if(this.tarjeta == 1){
        if(this.boletos <= 4){
          this.desc = (this.boletos*12) * 0.10;
          this.total = (this.boletos * 12) - this.desc;
        }
        else if(this.boletos <= 10){
          this.desc = (this.boletos*12) * 0.20;
          this.total = (this.boletos * 12) - this.desc;
        }
        else if(this.boletos <= 14){
          this.desc = (this.boletos*12) * 0.25;
          this.total = (this.boletos * 12) - this.desc;
        }
        else if(this.boletos > 14){
          this.error=('Solo tienes permitido 7 boletos por persona');
        }
      }
      else if(this.tarjeta == 0){
        if(this.boletos <= 2){
          this.total = this.boletos * 12;
        }
        else if(this.boletos <= 5){
          this.desc = (this.boletos * 12) * 0.10;
          this.total = (this.boletos * 12) - this.desc;
        }
        else if(this.boletos<= 7){
          this.desc = (this.boletos*12) * 0.15;
          this.total = (this.boletos * 12) - this.desc;
        }
        else if(this.boletos > 14){
          this.error=('Solo tienes permitido 7 boletos por persona');
        }
      }
    }
  }
}
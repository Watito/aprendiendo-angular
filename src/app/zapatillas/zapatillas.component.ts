import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

@Component({
  selector: 'zapatillas',
  templateUrl: './zapatillas.component.html',
})
export class ZapatillasComponent implements OnInit{

  public titulo: string = 'Componente de zapatillas';
  public zapatillas: Array<Zapatilla>;
  public marcas: String[];
  public color : String;
  public mi_marca : String ;


  constructor() {
    this.mi_marca = "Fila";
    this.color = "orange";
    this.marcas= new Array();
    this.zapatillas = [
        new Zapatilla('Reebook', 80, 'Reebokk', 'Blanco', true),
        new Zapatilla('Air Jordan', 190, 'Nike', 'Rojas', false),
        new Zapatilla('Total 90', 90, 'Adidas', 'Azules', true),
        new Zapatilla('Total 90', 100, 'Adidas', 'Rojas', false),
        new Zapatilla('Total 90', 99, 'Adidas', 'Doradas', true)
    ];
  }

  ngOnInit() {
      console.log(this.zapatillas);

      this.getMarcas();
  }

  getMarcas(){
    this.zapatillas.forEach((zapatilla,index) => {

      if(this.marcas.indexOf(zapatilla.marca)<0){
        this.marcas.push(zapatilla.marca);
    
      }
      
    });

    console.log("esta es marcas "+this.marcas);
  }

  getMarca(){
    alert(this.mi_marca);
  }

  addMarca(){
      this.marcas.push(this.mi_marca);
  }

}

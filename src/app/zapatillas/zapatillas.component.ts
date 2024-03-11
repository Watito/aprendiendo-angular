import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

@Component({
  selector: 'zapatillas',
  templateUrl: './zapatillas.component.html',
})
export class ZapatillasComponent implements OnInit{
  public titulo: string = 'Componente de zapatillas';
  public zapatillas: Array<Zapatilla>;

  constructor() {
    this.zapatillas = [
        new Zapatilla('Reebook', 80, 'Reebokk', 'Blanco', true),
        new Zapatilla('Air Jordan', 190, 'Nike', 'Rojas', true),
        new Zapatilla('Total 90', 90, 'Adidas', 'Azules', true),
        new Zapatilla('Total 90', 100, 'Adidas', 'Rojas', true),
        new Zapatilla('Total 90', 99, 'Adidas', 'Doradas', true)
    ];
  }

  ngOnInit() {
      console.log(this.zapatillas);
  }
}

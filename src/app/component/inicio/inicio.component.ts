import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/service/productos.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private _servicioProduct: ProductosService) { }

  ngOnInit(): void {
  }

}

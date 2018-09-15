import { Component, OnInit } from '@angular/core';
import {  ArticulosService } from './../services/articulos.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-articulo',
  templateUrl: './crear-articulo.component.html',
  styleUrls: ['./crear-articulo.component.css']
})
export class CrearArticuloComponent implements OnInit {

	articulo:any;

  constructor(private _articulos:ArticulosService,
  						private _router:Router) {
  	this.articulo = {
  		titulo: "",
  		contenido: ""
  	};
  }

  ngOnInit() {
  }

  crearArticulo(){
		this._articulos.crearArticulo(this.articulo)
			.subscribe(
				respuesta => {
					this._router.navigate(["/mostrar_articulo", respuesta['id']]);
					//console.log(respuesta);
				},
				error => {
					console.log(error);
				}
		);
  }

}

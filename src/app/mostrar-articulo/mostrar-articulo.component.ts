import { Component, OnInit } from '@angular/core';

import { ArticulosService } from './../services/articulos.service';
import {  ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mostrar-articulo',
  templateUrl: './mostrar-articulo.component.html',
  styleUrls: ['./mostrar-articulo.component.css']
})
export class MostrarArticuloComponent implements OnInit {

	articulo:any;

  constructor(private _articulos:ArticulosService,
  						private _ruta:ActivatedRoute) {
  	this.articulo = {
  			id: "",
  			titulo: "",
  			contenido: ""
  	};
  }

  ngOnInit() {
  	this._ruta.params.subscribe(
  		respuesta => {
  			this.mostrarArticulo(respuesta['id']);
  		},
	  	error => {
	  		console.log(error);
	  	}
  	);
  }

  mostrarArticulo(id){
	this._articulos.mostrarArticulo(id)
		.subscribe(
			respuesta => {
				this.articulo = respuesta;
				console.log(respuesta);
				//this.traerArticulos();
			},
			error => {
				console.log(error);
			}
		);
  }

}

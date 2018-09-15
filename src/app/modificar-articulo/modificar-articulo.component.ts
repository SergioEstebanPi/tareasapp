import { Component, OnInit } from '@angular/core';

import { ArticulosService } from './../services/articulos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modificar-articulo',
  templateUrl: './modificar-articulo.component.html',
  styleUrls: ['./modificar-articulo.component.css']
})
export class ModificarArticuloComponent implements OnInit {

	articulo:any;

  constructor(private _articulos:ArticulosService,
  						private _ruta:ActivatedRoute,
  						private _router:Router) {
  	this.articulo = {
  		id: "",
  		titulo: "",
  		contenido: ""
  	};
  }

  ngOnInit() {
  	this._ruta.params.subscribe(
  		respuesta => {
  			this._articulos.mostrarArticulo(respuesta['id'])
	  			.subscribe(
	  				respuesta => {
	  					//console.log(respuesta);
	  					this.articulo = respuesta;
	  				},
	  				error => {
	  					console.log(error);
	  				}
	  			);
  			//console.log(respuesta);
  		},
  		error => {
  			console.log(error);
  		}
  	);
  }


  modificarArticulo(){
  	this._articulos.modificarArticulo(this.articulo)
  		.subscribe(
  			respuesta => {
  				console.log(respuesta);
  				//this._router.navigate(['/mostrar_articulo', respuesta['id']]);
  				//console.log(respuesta);
  			},
  			error => {
  				console.log(error);
  			}
  		);
  }
}

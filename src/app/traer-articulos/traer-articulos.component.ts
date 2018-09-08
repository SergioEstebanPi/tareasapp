import { Component, OnInit } from '@angular/core';
import { ArticulosService } from './../services/articulos.service';

@Component({
  selector: 'app-traer-articulos',
  templateUrl: './traer-articulos.component.html',
  styleUrls: ['./traer-articulos.component.css']
})
export class TraerArticulosComponent implements OnInit {

	articulos:Array<any>;
  constructor(private _articulos:ArticulosService) {
  	this.articulos = [{
  		//id: "",
  		titulo: "",
  		contenido: ""
  	}];
  }

  ngOnInit() {
  	this.traerArticulos();
  }

  traerArticulos(){
  	this._articulos.traerArticulos()
  		.subscribe(
  			respuesta => {
  				//console.log(respuesta);
  				this.articulos = respuesta;
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
  				console.log(respuesta);
  				//this.traerArticulos();
  			},
  			error => {
  				console.log();
  			}
  		);
  }

  crearArticulo(articulo){
  	this._articulos.crearArticulo(articulo)
  		.subscribe(
  			respuesta => {
  				console.log(respuesta);
  				//this.traerArticulos();
  			},
  			error => {
  				console.log();
  			}
  		);
  }

  eliminarArticulo(id){
  	let confirmacion = confirm("Estas seguro?");
  	if(confirmacion){
	  	this._articulos.eliminarArticulo(id)
	  		.subscribe(
	  			respuesta => {
	  				//console.log(respuesta);
	  				this.traerArticulos();
	  			},
	  			error => {
	  				console.log();
	  			}
	  		);
  	}
  }

}

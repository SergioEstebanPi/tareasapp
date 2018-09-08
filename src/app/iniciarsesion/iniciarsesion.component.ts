import { Component, OnInit } from '@angular/core';
import { UsuariosService } from './../services/usuarios.service';


@Component({
  selector: 'app-iniciarsesion',
  templateUrl: './iniciarsesion.component.html',
  styleUrls: ['./iniciarsesion.component.css']
})
export class IniciarsesionComponent implements OnInit {

	formulario:any;

  constructor(private _usuarios:UsuariosService) {
  	this.formulario = {
  			auth:{
  				email: "",
  				pasword: ""
  			}
  	};
  }

  ngOnInit() {
  }

  iniciarSesion(){
  	//console.log(this.formulario);
  	this._usuarios
  		.iniciarSesion(this.formulario)
  		.subscribe(
  			respuesta => {
  				//console.log(respuesta);
  				localStorage.setItem("SessionToken", respuesta.jwt);
  			},
  			error => {
  				console.log(error);
  			}
  		);
  }

}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

	private url:string;
	private encabezados:any;

  constructor(private http:HttpClient) { 
  	this.url="http://apidocumentospiensadigital.herokuapp.com";
  	this.encabezados={
  		headers: new HttpHeaders(
	  		{
	  			"Content-Type": "application/json"
	  		}
  		)
  	};
  }

  iniciarSesion(autenticacion):Observable<any>{
  	let urlAutenticacacion = this.url + "/user_token";
  	let parametros = JSON.stringify(autenticacion);
  	return this.http.post<any>(
  		urlAutenticacacion, 
  		parametros, 
  		this.encabezados
  	);
  }

}

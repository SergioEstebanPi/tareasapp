import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

	url:string;
	encabezados:any;
	articulos:Array<any>;

  constructor(private http:HttpClient) {
  	this.url = "http://apidocumentospiensadigital.herokuapp.com/articulos";
  	this.encabezados = {
  		headers: new HttpHeaders(
		  	{
		  		"Content-Type": "application/json",
		  		"Authorization": "Bearer " + localStorage.getItem("SessionToken")
		  	}
	  	)
  	};
  }

  /* GET index */
  traerArticulos():Observable<any>{
  	return this.http.get<any>(
  			this.url,
  			this.encabezados
  	);
  }

  /* GET show */
  mostrarArticulo(id):Observable<any>{
  	let urlArticulo = this.url + "/" + id;
  	return this.http.get<any>(
  		urlArticulo,
  		this.encabezados
  	);
  }

  /* POST create */
  crearArticulo(articulo){
  	let params = JSON.stringify(articulo);
  	return this.http.post<any>(
  		this.url,
  		params,
  		this.encabezados
  	);
  }

  /* PUT update */
  modificarArticulo(articulo){
  	let params = JSON.stringify(articulo);
  	return this.http.put<any>(
  		this.url,
  		params,
  		this.encabezados
  	);
  }

  /* DELETE destroy */
  eliminarArticulo(id){
  	let urlArticulo = this.url + "/" + id;
  	return this.http.delete<any>(
  		urlArticulo,
  		this.encabezados
  	);
  }
}

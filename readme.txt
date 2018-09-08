# servicios
ng g service equipo

# importar en app.module.ts
import { EquipoService } from './services/equipo.service';

providers: [EquipoService],

# activar ruta en componente
ej: equipo.component.ts
import { ActivatedRoute } from '@angular/router';
private _rutaService:ActivatedRoute

# agregar promesa que en angular se captura con un elemento observable
ej: equipo.component.ts
  	this._rutaService.params
  		.subscribe(
  				parametros => {
  					this.miEquipo=this._equipoService.traerMiembroEquipo(parametros['id']);
  				}, 
  				error => {
  					console.log(error);
  				}
  		);

# consumo del api
apidocumentospiensadigital.herokuapp.com

#subido al repositorio
https://github.com/SergioEstebanPi/tareasapp.git

# compilar proyecto para subir a un servidor
npm build 
en vendor quedan las dependencias compromidas
se genera en la carpeta con el nombre del proyecto dentro de la ruta /dis

# ng g component
cabecera
piedepagina
inicio

bootstrap CND en aplicacion.html
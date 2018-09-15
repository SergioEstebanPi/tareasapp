import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { PiedepaginaComponent } from './piedepagina/piedepagina.component';
import { InicioComponent } from './inicio/inicio.component';

import { RouterModule, Routes} from '@angular/router';
import { UsuariosService } from './services/usuarios.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { IniciarsesionComponent } from './iniciarsesion/iniciarsesion.component';
import { FormsModule } from '@angular/forms';
import { CrearCuentaComponent } from './crear-cuenta/crear-cuenta.component';
import { TraerArticulosComponent } from './traer-articulos/traer-articulos.component';

import { SessionGuard } from './guards/session.guard';
import { MostrarArticuloComponent } from './mostrar-articulo/mostrar-articulo.component';
import { CrearArticuloComponent } from './crear-articulo/crear-articulo.component';
import { ModificarArticuloComponent } from './modificar-articulo/modificar-articulo.component';

const rutas:Routes=[
  {path:"", component:InicioComponent},
  {path:"inicio", component:InicioComponent},
  {path:"iniciar_sesion", component:IniciarsesionComponent},
  {path:"crear_cuenta", component:CrearCuentaComponent},
  {path:"traer_articulos", 
    component:TraerArticulosComponent, 
    canActivate:[SessionGuard]
  },
  {path:"mostrar_articulo/:id", 
    component:MostrarArticuloComponent,
    canActivate:[SessionGuard]
  },
  {path:"crear_articulo", 
    component:CrearArticuloComponent,
    canActivate:[SessionGuard]
  },
  {path:"modificar_articulo/:id", 
    component:ModificarArticuloComponent,
    canActivate:[SessionGuard]
  },
  {path:"*", redirectTo:'/', pathMatch:'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    PiedepaginaComponent,
    InicioComponent,
    IniciarsesionComponent,
    CrearCuentaComponent,
    TraerArticulosComponent,
    MostrarArticuloComponent,
    CrearArticuloComponent,
    ModificarArticuloComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas),
    HttpModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    UsuariosService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

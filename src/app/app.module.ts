import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/logo/logo.component';
import { RedesComponent } from './components/redes/redes.component';
import { FondoComponent } from './components/fondo/fondo.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { AcercaDemiComponent } from './components/acerca-demi/acerca-demi.component';
import { ExperenciaComponent } from './components/experencia/experencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HasComponent } from './components/has/has.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    RedesComponent,
    FondoComponent,
    PerfilComponent,
    AcercaDemiComponent,
    ExperenciaComponent,
    EducacionComponent,
    HasComponent,
    ProyectoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

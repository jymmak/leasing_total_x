import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NuevoSucursalComponent } from './nuevo-sucursal/nuevo-sucursal.component';
import { NuevoContactoComponent } from './nuevo-contacto/nuevo-contacto.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DirectivasModule } from 'src/app/directivas/directivas.module';
import { RouterModule } from '@angular/router';
import { AgmCoreModule } from "@agm/core";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { environment } from "src/environments/environment";


@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: environment.apiKey

    })
  ],
  declarations: [
    NuevoSucursalComponent,
    NuevoContactoComponent,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    DirectivasModule,
    RouterModule,
  ]
})
export class SucursalContactoModule { }

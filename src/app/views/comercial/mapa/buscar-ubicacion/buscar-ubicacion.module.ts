import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabeceraBasicoModule } from 'src/app/components/common/cabecera-de-pagina/cabecera-de-pagina.module';
import { FormsModule } from '@angular/forms';
import { DirectivasModule } from 'src/app/directivas/directivas.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule } from '@agm/core';
import { environment } from 'src/environments/environment';

@NgModule({
  imports: [
    CabeceraBasicoModule,
    FormsModule,
    DirectivasModule,
    NgbModule.forRoot(),
        AgmCoreModule.forRoot({
        apiKey: environment.apiKey
    })

  ],
  declarations: []
})
export class BuscarUbicacionModule { }

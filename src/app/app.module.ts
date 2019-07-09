import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from "@angular/router";
import { ROUTES } from "./app.routes";
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViewsModule } from './views/views.module';
import { LoginModule } from './views/login/login.module';
import { ModulosModule } from './views/modulos/modulos.module';
import { LayoutsModule } from './components/common/layouts/layouts.module';
import { GoogleMapsAPIWrapper } from '@agm/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptor } from 'src/config/token.interceptor';
import { LoginService } from './views/login/login.service';
import { ModulosService } from './views/modulos/modulos.service';
import { AuthInterceptor } from 'src/config/auth.interceptor';
import { ChartModule } from 'angular-highcharts';






@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    // Angular modules
    BrowserModule,
    HttpModule,
    FormsModule,
    BrowserAnimationsModule,


    // Views

    ViewsModule,
    LoginModule,
    ModulosModule,




    // Modules
    LayoutsModule,
    HttpClientModule,



    ChartModule,



    RouterModule.forRoot(ROUTES, {
      useHash: false
    })
  ],
  providers: [
    GoogleMapsAPIWrapper,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    LoginService,
    ModulosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

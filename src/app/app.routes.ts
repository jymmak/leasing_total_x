import { Routes } from "@angular/router";
import { basicComponent } from "./components/common/layouts/basic.component";
import { ModulosComponent } from "./views/modulos/modulos.component";
import { loginComponent } from "./views/login/login.component";
import { LayoutsModulosComponent } from "./components/common/layouts/layouts-modulos.component";
import { blankComponent } from "./components/common/layouts/blank.component";
import { AuthGuard } from "../config/auth.guard";





export const ROUTES: Routes = [
  // Main redirect
  // { path: '', redirectTo: 'login', pathMatch: 'full' },

  // App views
  // {
  //   path: '', component: basicComponent,
  //   children: [

  //   ]
  // },
   //{
  // path: '', component: LayoutsDetalleComponent,
   // children: [


   //]
   //},
  {
    path: '', component: blankComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'modulos', component: ModulosComponent },

    ]
  },

  // Handle all other routes
  { path: '**', component: loginComponent },
  { path: 'login', component: loginComponent },

];







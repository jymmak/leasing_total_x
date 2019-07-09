import { Routes } from "@angular/router";
import { basicComponent } from "src/app/components/common/layouts/basic.component";



export const ROUTES: Routes = [
    {
        path: '', component: basicComponent,
        children: [
        ]
    },
];





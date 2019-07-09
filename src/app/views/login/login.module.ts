import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { loginComponent } from "./login.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [loginComponent],
    imports: [BrowserModule,
        ReactiveFormsModule,
        FormsModule
    ],
})

export class LoginModule { }

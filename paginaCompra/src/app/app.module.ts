import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PaginaRegistroComponent } from './Components/PaginaRegistro/PaginaRegistro.component';
import { PaginaErrorComponent } from './Components/PaginaError/PaginaError.component';
import { PaginaComprasComponent } from './Components/PaginaCompras/PaginaCompras.component';
import { PaginaPagoComponent } from './Components/PaginaPago/PaginaPago.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginaRegistroComponent,
    PaginaErrorComponent,
    PaginaComprasComponent,
    PaginaPagoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

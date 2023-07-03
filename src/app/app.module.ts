import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerLogoComponent } from './Components/banner-logo/banner-logo.component';
import { PaginaPrincipalComponent } from './Pages/pagina-principal/pagina-principal.component';
import { FormularioComponent } from './Components/formulario/formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerLogoComponent,
    PaginaPrincipalComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

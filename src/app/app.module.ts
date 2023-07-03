/*Importações essenciais*/
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

/*Componentes do projeto */
import { BannerLogoComponent } from './Components/banner-logo/banner-logo.component';
import { FormularioComponent } from './Components/formulario/formulario.component';
import { PaginaPrincipalComponent } from './Pages/pagina-principal/pagina-principal.component';
import { AppComponent } from './app.component';

/*Importação para formulário reativo (não requisita instalação)*/
import { ReactiveFormsModule } from '@angular/forms';

/*Importações para os inputs personalizados (instala o angula material)*/
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

/*Angula material*/
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    BannerLogoComponent,
    PaginaPrincipalComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

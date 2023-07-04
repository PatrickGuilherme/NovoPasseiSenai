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
import { CardMediaSemestreComponent } from './Components/Cards/card-media-semestre/card-media-semestre.component';
import { MatCardModule } from '@angular/material/card';
import { EstudanteService } from './Services/estudante.service';
import { CardMediaTabelaComponent } from './Components/Cards/card-media-tabela/card-media-tabela.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerLogoComponent,
    PaginaPrincipalComponent,
    FormularioComponent,
    CardMediaSemestreComponent,
    CardMediaTabelaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatCardModule
  ],
  providers: [EstudanteService],
  bootstrap: [AppComponent]
})
export class AppModule { }

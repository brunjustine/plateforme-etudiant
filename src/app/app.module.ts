import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { MenuComponent } from './menu/menu.component';
import { PiedComponent } from './pied/pied.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { ListeEtudiantComponent } from './liste-etudiant/liste-etudiant.component';
import { Erreur404Component } from './erreur404/erreur404.component';
import { ContactComponent } from './contact/contact.component';
import { from } from 'rxjs';
import { EtudiantFormComponent } from './etudiant-form/etudiant-form.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { EtudiantsService } from './services/etudiants.service';
import { AuthInterceptor } from './services/auth.interceptor';
import { E401Interceptor } from './services/e401.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    MenuComponent,
    PiedComponent,
    EtudiantComponent,
    ListeEtudiantComponent,
    Erreur404Component,
    ContactComponent,
    EtudiantFormComponent,
    ConnexionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [EtudiantsService, {provide:HTTP_INTERCEPTORS, useClass : AuthInterceptor, multi:true}, {provide:HTTP_INTERCEPTORS, useClass: E401Interceptor, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }

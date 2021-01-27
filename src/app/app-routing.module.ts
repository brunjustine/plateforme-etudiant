import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { EtudiantFormComponent } from './etudiant-form/etudiant-form.component';
import { ContactComponent } from './contact/contact.component';
import { Erreur404Component } from './erreur404/erreur404.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { ListeEtudiantComponent } from './liste-etudiant/liste-etudiant.component';
import { EditionGuard } from './services/edition.guard';
import { ConnexionComponent } from './connexion/connexion.component';

const routes: Routes = [
  {path:"", component:AccueilComponent},
  {path:"etudiant/:idEtudiant", component:EtudiantComponent},
  {path:"listeEtudiant", component:ListeEtudiantComponent},
  {path:"etudiantForm", component:EtudiantFormComponent},
  {path:"contact", component:ContactComponent},
  {path:"edition", loadChildren:()=>import('./edition/edition.module').then(e=>e.EditionModule), 
  canActivate:[EditionGuard],
  canLoad:[EditionGuard]
  },
  {path:"connexion" , component:ConnexionComponent},
  {path:"**", component:Erreur404Component}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

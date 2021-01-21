import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { EtudiantFormComponent } from './etudiant-form/etudiant-form.component';
import { ContactComponent } from './contact/contact.component';
import { Erreur404Component } from './erreur404/erreur404.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { ListeEtudiantComponent } from './liste-etudiant/liste-etudiant.component';

const routes: Routes = [
  {path:"", component:AccueilComponent},
  {path:"etudiant/:idEtudiant", component:EtudiantComponent},
  {path:"listeEtudiant", component:ListeEtudiantComponent},
  {path:"etudiantForm", component:EtudiantFormComponent},
  {path:"contact", component:ContactComponent},
  {path:"**", component:Erreur404Component}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

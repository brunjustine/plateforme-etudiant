import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EtudiantEditComponent } from './etudiant-edit/etudiant-edit.component';
import { AccueilEditComponent } from './accueil-edit/accueil-edit.component';
import { UtilisateursEditComponent } from './utilisateurs-edit/utilisateurs-edit.component';

const routes = [
  {path:'', component:AccueilEditComponent, children:[
    {path:'', component:EtudiantEditComponent},
    {path:'etudiant', component:EtudiantEditComponent},
    {path:'utilisateurs', component:UtilisateursEditComponent}
  ]}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class EditionRoutingModule { }

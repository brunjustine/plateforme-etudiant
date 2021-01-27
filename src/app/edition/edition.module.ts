import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EtudiantEditComponent } from './etudiant-edit/etudiant-edit.component';
import { AccueilEditComponent } from './accueil-edit/accueil-edit.component';
import { EditionRoutingModule } from './edition-routing.module';
import { UtilisateursEditComponent } from './utilisateurs-edit/utilisateurs-edit.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [EtudiantEditComponent, AccueilEditComponent, UtilisateursEditComponent],
  imports: [
    CommonModule,
    EditionRoutingModule,
    FormsModule
  ]
})
export class EditionModule { }

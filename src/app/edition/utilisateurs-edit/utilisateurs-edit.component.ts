import { Component, OnInit } from '@angular/core';
import { Profil, ProfilI } from 'src/app/modele/profil';
import { UtilisateursService } from 'src/app/services/utilisateurs.service';

@Component({
  selector: 'app-utilisateurs-edit',
  templateUrl: './utilisateurs-edit.component.html',
  styleUrls: ['./utilisateurs-edit.component.css']
})
export class UtilisateursEditComponent implements OnInit {
  utilisateur : Profil=<Profil>{} ;

  constructor(public utilServ:UtilisateursService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    
  }

  ChangingUtilisateur(idUtilisateur: string) {
    this.utilisateur = this.utilServ.getUtilisateurById(+idUtilisateur)
  }
}

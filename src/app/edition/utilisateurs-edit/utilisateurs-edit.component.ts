import { Component, OnInit } from '@angular/core';
import { Profil, ProfilI } from 'src/app/modele/profil';

@Component({
  selector: 'app-utilisateurs-edit',
  templateUrl: './utilisateurs-edit.component.html',
  styleUrls: ['./utilisateurs-edit.component.css']
})
export class UtilisateursEditComponent implements OnInit {
  utilisateur : ProfilI = <ProfilI>{};

  constructor() { }

  ngOnInit(): void {
    this.utilisateur = new Profil();
  }

  onSubmit() {
    
  }
}

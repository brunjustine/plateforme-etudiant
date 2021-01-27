import { Component, OnInit } from '@angular/core';
import { Profil, ProfilI } from 'src/app/modele/profil';

@Component({
  selector: 'app-etudiant-edit',
  templateUrl: './etudiant-edit.component.html',
  styleUrls: ['./etudiant-edit.component.css']
})
export class EtudiantEditComponent implements OnInit {
  etudiant : ProfilI = <ProfilI>{};
  constructor() { }

  ngOnInit(): void {
    this.etudiant = new Profil();
  }

  onSubmit() {
    
  }
}

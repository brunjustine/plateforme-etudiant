import { Component, OnInit } from '@angular/core';
import { Profil } from '../modele/profil';

@Component({
  selector: 'app-liste-etudiant',
  templateUrl: './liste-etudiant.component.html',
  styleUrls: ['./liste-etudiant.component.css']
})
export class ListeEtudiantComponent implements OnInit {
  listeEtudiants: Array<Profil> =[];
  constructor() { }

  ngOnInit(): void {
    this.listeEtudiants = [
      {
        "nom":"Toto",
        "prenom":"Titi",
        "specialites":["icc","ia","data science"],
        "age":20,
        "mail":"mail@mail.com",
        "photo":"https://wl-sympa.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg"
      },
      {
        "nom":"Tata",
        "prenom":"Tutu",
        "specialites":["icc"],
        "age":20,
        "mail":"mail@mail.com",
        "photo":"https://wl-sympa.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg"
      }
    ]
  }

}

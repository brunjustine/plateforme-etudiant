import { Injectable } from '@angular/core';
import { Profil } from '../modele/profil';

@Injectable({
  providedIn: 'root'
})
export class EtudiantsService {
  listeEtudiants : Array<Profil> = [];

  constructor() { 

    this.listeEtudiants = [
      {
        "nom":"Toto",
        "prenom":"Titi",
        "specialites":["icc","ia","data science"],
        "age":20,
        "mail":"mail@mail.com",
        "photo":"https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg"
      },
      {
        "nom":"Tata",
        "prenom":"Tutu",
        "specialites":["icc"],
        "age":20,
        "mail":"mail@mail.com",
        "photo":"https://www.flaticon.com/svg/static/icons/svg/3170/3170738.svg"
      }
    ]
  }
}

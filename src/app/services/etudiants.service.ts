import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Profil } from '../modele/profil';

@Injectable({
  providedIn: 'root'
})
export class EtudiantsService {
  listeEtudiants : Array<Profil> = [];
  
  constructor(private http:HttpClient) {}

  async addStudent(student : Profil, id:number) {
    if (id ==undefined) {
      this.listeEtudiants.push(student);
    } else {
      this.listeEtudiants[id]=student;
    }
  }

  getEtudiants() {
    /* Requete Ajajx pour aller chercher la liste des etudiants*/
    this.http.get<Array<Profil>>("/assets/data/etudiants.json").subscribe(
      data => {
        this.listeEtudiants = data;
      }
    )
  }
}

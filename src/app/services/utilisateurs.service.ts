import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Profil, ProfilI } from '../modele/profil';
import { utils } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class UtilisateursService {
  listeUtilisateurs : Array<Profil> = [];

  constructor(private http:HttpClient) { }

  getUtilisateurs() {
  this.http.get<Profil>(`/assets/ids/lambda@1234.json`).subscribe (
    data => {
      this.listeUtilisateurs.push(data);
    })
  }

  getUtilisateurById(idUtilisateur : number) {
    return this.listeUtilisateurs.filter(utils => utils._id == idUtilisateur)[0];
  }
}

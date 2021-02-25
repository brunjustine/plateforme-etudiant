import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ProfilI } from '../modele/profil';
import { ConnecteService } from './connecte.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  profil:ProfilI | undefined;
  constructor(private route:Router, private http:HttpClient, private connectServ: ConnecteService) { }

  connexionId(connexion:{id:any,mdp:string}) {
    this.http.get<ProfilI>(`/assets/ids/${connexion.id}@${connexion.mdp}.json`).subscribe (
      data => {
        this.connectServ.connexion = true;
        if (data['statut']) this.connectServ.statut = data['statut'];
        if (data['token']) this.connectServ.token = data['token'];
        this.profil = data;
        this.route.navigate(['edition']);
      },
      erreur => {
        this.connectServ.connexion = false;
        this.connectServ.statut=0;
        this.profil = <ProfilI>{};
      }
    )
  }

  deconnexionId() {
        this.connectServ.connexion = false;
        this.connectServ.statut=0;
        this.profil = <ProfilI>{};
  }
}

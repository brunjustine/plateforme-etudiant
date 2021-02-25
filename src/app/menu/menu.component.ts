import { Component, OnInit } from '@angular/core';
import { ProfilI } from '../modele/profil';
import { AuthService } from '../services/auth.service';
import { ConnecteService } from '../services/connecte.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public isConnect: Boolean = false;

  constructor(public connectServ:ConnecteService, private authServ: AuthService) { }

  ngOnInit(): void {
  }

  deconnexion() {
    this.authServ.deconnexionId()
  }

}

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ConnecteService } from '../services/connecte.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
   u: any = {id:'',mdp:''}
   public isConnect : boolean = false;

  constructor(private authServ:AuthService, private connectServ:ConnecteService) { }

  ngOnInit(): void {
   this.isConnect = this.connectServ.connexion;
  }

  connexion() {
    console.log(this.u);
    this.authServ.connexionId(this.u);
  }
}

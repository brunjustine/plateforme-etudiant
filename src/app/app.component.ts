import { Component } from '@angular/core';
import { EtudiantsService } from './services/etudiants.service';
import { UtilisateursService } from './services/utilisateurs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'EISTI 2020 / CloudFront';

  constructor(public servEtu:EtudiantsService, public utilServ: UtilisateursService) { }
  ngOnInit(): void {
    this.servEtu.getEtudiants();
    this.utilServ.getUtilisateurs()
  }
}

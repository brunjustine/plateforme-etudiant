import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Profil } from '../modele/profil';
import { EtudiantsService } from '../services/etudiants.service';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {

  private sub : any;
  public myEtudiant : Profil | undefined;
  @Input() idEtudiant : number =-1;

  
  constructor(public servEtu:EtudiantsService,  
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      if (params['idEtudiant']) {
        this.idEtudiant = +params['idEtudiant']; // (+) converts string 'id' to a number
        this.myEtudiant = this.servEtu.listeEtudiants[this.idEtudiant]
      }
   });
  }

}

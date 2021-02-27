import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Profil } from '../modele/profil';
import { ConnecteService } from '../services/connecte.service';
import { EtudiantsService } from '../services/etudiants.service';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {
  private sub : any;
  public openModal : boolean = false;
  @Input() idEtudiant : number =-1;

  
  constructor(public servEtu:EtudiantsService,
    public connectServ:ConnecteService,  
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      if (params['idEtudiant']) {
        this.idEtudiant = +params['idEtudiant']; // (+) converts string 'id' to a number
      }
   });
  }

  editInput() {
    this.openModal = true;
  }
}

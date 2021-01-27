import { Component, OnInit } from '@angular/core';
import { EtudiantsService } from '../services/etudiants.service';

@Component({
  selector: 'app-liste-etudiant',
  templateUrl: './liste-etudiant.component.html',
  styleUrls: ['./liste-etudiant.component.css']
})

export class ListeEtudiantComponent implements OnInit {
  constructor(public servEtu:EtudiantsService) { }

  ngOnInit(): void {
    this.servEtu.getEtudiants();
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EtudiantsService } from '../services/etudiants.service';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {

  private sub : any;
  idEtudiant : number | undefined;
  
  constructor(public servEtu:EtudiantsService,  
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.idEtudiant = +params['idEtudiant']; // (+) converts string 'id' to a number

      // In a real app: dispatch action to load the details here.
   });
  }
}

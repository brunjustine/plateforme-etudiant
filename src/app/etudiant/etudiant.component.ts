import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {

  @Input()
  profil:any;
  
  constructor() { }

  ngOnInit(): void {
  }

}

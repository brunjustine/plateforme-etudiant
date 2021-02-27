import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Profil, ProfilI } from 'src/app/modele/profil';
import { EtudiantsService } from 'src/app/services/etudiants.service';

@Component({
  selector: 'app-etudiant-edit',
  templateUrl: './etudiant-edit.component.html',
  styleUrls: ['./etudiant-edit.component.css']
})
export class EtudiantEditComponent implements OnInit {
  etudiant: Profil=<Profil>{} ;
  etudiantFormat: ProfilI = <ProfilI>{};

  constructor(public servEtu: EtudiantsService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    //if (form.valid) {
    //  console.log(this.etudiant)
    //  console.log(this.servEtu.listeEtudiants[0])      
    //}
  }

  ChangingStudent(idEtudiant:String){
    this.etudiant = this.servEtu.listeEtudiants[+idEtudiant]
  }
}

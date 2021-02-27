import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Profil, ProfilI } from '../modele/profil';
import { EtudiantsService } from '../services/etudiants.service';

@Component({
  selector: 'app-etudiant-form',
  templateUrl: './etudiant-form.component.html',
  styleUrls: ['./etudiant-form.component.css']
})
export class EtudiantFormComponent implements OnInit {
  @Input() etudiant:Profil|undefined;
  @Input() id:number =-1;
  etudiantFormat!: Profil;

  constructor(public servEtu:EtudiantsService) { }

  ngOnInit(): void {
    if (this.etudiant==undefined) {
      this.initEtudiant();
    }
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log("formvalid")
      this.formatFormValue(form);
      this.servEtu.addStudent(this.etudiantFormat, this.id);
    }
  }

  formatFormValue(form: NgForm) {
    this.etudiantFormat = {
      _id:this.id,
      nom:form.value.nom,
      prenom:form.value.prenom,
      age:form.value.age,
      mail:form.value.mail,
      specialites:[form.value.specialites],
      photo:form.value.photo,
      statut:0,
      token:form.value.nom+form.value.prenom
    }
  }

  initEtudiant() {
    this.etudiant = {
      _id:this.id,
      nom:'',
      prenom:'',
      age:0,
      mail:'',
      specialites:[''],
      photo:'',
      statut:0,
      token:''
    }
  }
}

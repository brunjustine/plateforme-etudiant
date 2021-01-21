import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  mail:any;
  
  constructor() { }

  ngOnInit(): void {
    this.mail = {
      nom:'',
      prenom:'',
      mail:'',
      objet:'',
      message:''
    }
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      var fullMessage = this.mail.message + '\n'+this.mail.nom+' '+this.mail.prenom+' '+this.mail.mail;
      window.open('mailto:brunjustin@eisti.eu?subject='+this.mail.objet+'&body='+fullMessage);
    }
   
  }
}

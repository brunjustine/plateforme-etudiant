import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact:any;
  
  constructor() { }

  ngOnInit(): void {
    this.contact = {
      nom:'',
      prenom:'',
      mail:'',
      option:'',
      photo:''
    }
  }

  suiviInput() {
    console.log(this.contact)
  }
}

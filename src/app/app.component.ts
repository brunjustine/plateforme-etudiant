import { Component } from '@angular/core';
import { EtudiantsService } from './services/etudiants.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'EISTI 2020 / CloudFront';

  constructor(public servEtu:EtudiantsService) { }
  ngOnInit(): void {
    this.servEtu.getEtudiants();
  }
}

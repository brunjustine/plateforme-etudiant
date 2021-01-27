import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConnecteService {
  statut:number = 0;
  connexion:boolean = false;
  token:string="";

  constructor() {}

  

}

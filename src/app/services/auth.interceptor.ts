import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { core } from '@angular/compiler';
import {catchError} from 'rxjs/internal/operators'
import { ConnecteService } from './connecte.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  entetes : any;
  constructor(private connectServ:ConnecteService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(this.connectServ.token) {
      this.entetes = {
        headers: new HttpHeaders({
          'Content-Type' : 'application/json',
          'Authorization' : 'Bearer' +this.connectServ.token
        })
      }
    }
    else {
      this.entetes = {
        headers: new HttpHeaders({
          'Content-Type':'application/json'
        })
      }
    }
    const authReq = request.clone(this.entetes);

    console.log("La requête va être envoyée avec un nouveau header intégrant une authorisation")
    return next.handle(authReq)
      .pipe(
        catchError((erreur) => {
          console.log("Une errruer s'est produite");
          console.log(erreur);
          return Observable.throw(erreur);
        })
      )as any;
  }
}

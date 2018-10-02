import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Jsonp } from '@angular/http';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from '../../node_modules/rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const apiUrl = 'http://localhost:3000/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  sendEmailUrl = '/send';
  constructor(private http: Http) { }

  sendEmail(name, email, message): Observable<any> {
    const uri = `${apiUrl + this.sendEmailUrl}`;
    const obj = {
      name: name,
      email: email,
      message: message,
    };
    return this.http.post(uri, obj);
  }
}
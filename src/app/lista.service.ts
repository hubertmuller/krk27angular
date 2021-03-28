import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

export interface Szczepionka {
  id: number;
  name: string;
  details: SzczepionkaDetails;
}

export interface SzczepionkaDetails {
  price: number;
  country: string;
}

@Injectable({
  providedIn: 'root'
})
export class ListaService {
  public sid;
  constructor(private http: HttpClient) {
    this.sid = Math.random();
    console.log('STARTUJE SERWIS=' + this.sid);
  }

  load(): Observable<Szczepionka[]> {
    console.log('id service=' + this.sid);
    const myHeaders = new HttpHeaders();
    myHeaders.append('Accept', 'application/json');
    return this.http.get<Szczepionka[]>('http://localhost:3200', {headers: myHeaders});
  }
}

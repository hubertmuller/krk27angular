import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

export interface Czlowiek {
  imie: string;
  nazwisko: string;
}

@Injectable({
  providedIn: 'root'
})
export class ZapisyService {

  constructor(private http: HttpClient) {

  }

  add(czlowiek: Czlowiek): Observable<any> {
    const myHeaders = new HttpHeaders();
    myHeaders.append('Accept', 'application/json');
    return this.http.put<any>('http://localhost:3200/czlowiek', czlowiek,{headers: myHeaders});
  }

  update(id: string, czlowiek: Czlowiek): Observable<any> {
    const myHeaders = new HttpHeaders();
    myHeaders.append('Accept', 'application/json');
    return this.http.post<any>('http://localhost:3200/czlowiek/' + id, czlowiek,{headers: myHeaders});
  }

  get(id: string): Observable<any> {
    const myHeaders = new HttpHeaders();
    myHeaders.append('Accept', 'application/json');
    return this.http.get<any>('http://localhost:3200/czlowiek/' + id,{headers: myHeaders});
  }
}

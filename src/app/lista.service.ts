import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../environments/environment";

export interface Czlowiek {
  id?: number;
  imie: string;
  nazwisko: string;
  plec: string;
  zyczenia: {
    a: boolean;
    b: boolean;
  };
  typ: number;
  komentarze: string;
}

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
    console.log('ladowanie listy szczepionek, id service=' + this.sid);
    const myHeaders = new HttpHeaders();
    myHeaders.append('Accept', 'application/json');
    return this.http.get<Szczepionka[]>(environment.endPointUrl, {headers: myHeaders});
  }

  loadLudzie(): Observable<Czlowiek[]> {
    console.log('ladowanie listy ludzi, id service=' + this.sid);
    const myHeaders = new HttpHeaders();
    myHeaders.append('Accept', 'application/json');
    return this.http.get<Czlowiek[]>(environment.endPointUrl+'ludzie', {headers: myHeaders});
  }

  addCzlowiek(czlowiek: Czlowiek): Observable<Czlowiek> {
    console.log('dodawanie czlowieka, id service=' + this.sid, czlowiek);
    const myHeaders = new HttpHeaders();
    myHeaders.append('Accept', 'application/json');
    return this.http.post<Czlowiek>(environment.endPointUrl+'czlowiek', czlowiek,{headers: myHeaders});
  }

  updateCzlowiek(czlowiek: Czlowiek): Observable<Czlowiek> {
    console.log('aktualizowanie czlowieka, id service=' + this.sid, czlowiek);
    const myHeaders = new HttpHeaders();
    myHeaders.append('Accept', 'application/json');
    return this.http.put<Czlowiek>(environment.endPointUrl+'czlowiek', czlowiek,{headers: myHeaders});
  }

  getCzlowiek(id: string): Observable<Czlowiek> {
    console.log('aktualizowanie czlowieka, id service=' + this.sid, id);
    const myHeaders = new HttpHeaders();
    myHeaders.append('Accept', 'application/json');
    return this.http.get<Czlowiek>(environment.endPointUrl+'czlowiek/'+id, {headers: myHeaders});
  }

  deleteCzlowiek(id: string): Observable<any> {
    const myHeaders = new HttpHeaders();
    myHeaders.append('Accept', 'application/json');
    return this.http.delete<Czlowiek>(environment.endPointUrl+'czlowiek/'+id, {headers: myHeaders});
  }
}

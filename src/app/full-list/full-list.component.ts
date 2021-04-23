import { Component, OnInit } from '@angular/core';
import {Czlowiek, ListaService, Szczepionka} from "../lista.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-full-list',
  templateUrl: './full-list.component.html',
  styleUrls: ['./full-list.component.scss']
})
export class FullListComponent implements OnInit {

  private loadSubscription: Subscription;

  public ludzie: Czlowiek[];

  protected sub: Subscription;

  constructor(private listaService: ListaService) {

  }

  ngOnInit(): void {
    this.sub = this.loadSubscription = this.listaService.loadLudzie().subscribe( (ludzie) => {
        console.log('dane z serwisu lista ludzi:', ludzie);
        this.ludzie = ludzie;
      }
    );
  }

  ngOnDestroy(): void {
    console.log('zniszczenie komponentu Listy ludzi');
    this.sub.unsubscribe();
  }

}


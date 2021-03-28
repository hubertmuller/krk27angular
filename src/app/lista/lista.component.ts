import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ListaService, Szczepionka} from "../lista.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ListaComponent implements OnInit {

  private loadSubscription: Subscription;

  public szczepionki: Szczepionka[];

  constructor(private listaService: ListaService) {

  }

  ngOnInit(): void {
    this.loadSubscription = this.listaService.load().subscribe( (szczepionki) => {
        console.log(szczepionki);
        this.szczepionki = szczepionki;
      }
    );
  }

}

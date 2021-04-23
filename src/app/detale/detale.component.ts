import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ListaService, Szczepionka} from "../lista.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-detale',
  templateUrl: './detale.component.html',
  styleUrls: ['./detale.component.scss']
})
export class DetaleComponent implements OnInit, OnDestroy {

  public id: number;
  public szczepionka: Szczepionka;

  private sub: Subscription;

  constructor(private route: ActivatedRoute, private listaService: ListaService) {

  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe( (params) => {
        this.id = params.id;
        this.listaService.load().subscribe( (szczepionki) => {
          this.szczepionka = szczepionki.find( (szczepionka: Szczepionka) => szczepionka.id == this.id);
        });
      }
    )
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}

import { Component, OnInit } from '@angular/core';
import {ListaService} from "../lista.service";
import {ActivatedRoute, Params} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {

  public usuniety: boolean = false;

  private sub: Subscription;

  private params: Params;

  constructor(protected listaService: ListaService, private route: ActivatedRoute) {
    this.sub = this.route.params.subscribe( (params: Params) => {
      this.params = params;
      console.log('parametry routingu dla komponentu delete', params);
    });
  }

  ngOnInit(): void {
    this.listaService.deleteCzlowiek(this.params.id).subscribe( () => {
      console.log('udalo sie usunac czlowieka');
      this.usuniety = true;
    })
  }

  ngOnDestroy(): void {
    console.log('zniszczenie komponentu delete');
    this.sub.unsubscribe();
  }

}

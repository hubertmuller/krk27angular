import { Component, OnInit } from '@angular/core';
import {AddformComponent} from "./../addform/addform.component";
import {AbstractControl} from "@angular/forms";
import {Czlowiek} from "../lista.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-updateform',
  templateUrl: './../addform/addform.component.html',
  styleUrls: ['./../addform/addform.component.scss']
})
export class UpdateformComponent extends AddformComponent implements OnInit {

  //Pamietajmy ze ten komponent dziedziczy z AddComponent

  ngOnInit(): void {
    this.tytul = 'Aktualizuj';
    this.sub1 = this.listaService.getCzlowiek(this.params.id).subscribe( (czlowiek:Czlowiek) => {
      this.forma.setValue(czlowiek);
    })
  }

  ngOnDestroy(): void {
    console.log('zniszczenie komponentu update');
    this.sub1.unsubscribe();
    //ta subskrybcja moze nie zostac utworzona ponieważ mozemy przejsc do dodawania bez wyslania formy update
    //dlatego ? ktory oznacza wywolanie unsubscribe tylko jesli sub2 zostalo utworzone tzn ma wartosc inna niz undefined
    // pamietajmy ze obydwa pola sa dziedziczone
    this.sub2?.unsubscribe();
  }

  public zapisz() {
    const forma: {[p: string]: AbstractControl} = this.forma.controls;

    let czlowiek: Czlowiek = {
      imie: forma.imie.value,
      nazwisko: forma.nazwisko.value,
      plec: forma.plec.value,
      komentarze: forma.komentarze.value,
      typ: forma.typ.value,
      zyczenia: {
        a: forma.zyczenia.value.a,
        b: forma.zyczenia.value.b,
      }
    }

    this.sub2 = this.listaService.updateCzlowiek(czlowiek).subscribe( () => {
      console.log('udalo sie zaktualizowac czlowieka');
      alert('udalo sie zaktualizowac czlowieka');
      this.router.navigate(['/']);
    })
  }

}

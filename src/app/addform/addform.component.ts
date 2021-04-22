import {Component, OnDestroy, OnInit, Pipe} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {Czlowiek, ListaService} from "../lista.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Subscription} from "rxjs";

@Pipe({
  name: "przelicz"
})
export class PrzeliczPipe {
  transform(val: number, param1: number) {
    return val * param1;
  }
}

export class MyValidator{
  static mabycpomiedzy(min: number, max: number) {
    return function (control: FormControl) {
      let ok = false;

      // implementacja sprawdzenia

      if (control.value >= min && control.value <= max) ok = true;

      if (!ok) {
        return {
          mabyc: 'liczba jest inna niz oczekiwana'
        }
      } else {
        return null;
      }
    }
  }
}


@Component({
  selector: 'app-addform',
  templateUrl: './addform.component.html',
  styleUrls: ['./addform.component.scss']
})
export class AddformComponent implements OnInit, OnDestroy {

  forma: FormGroup = new FormGroup( {
    imie: new FormControl(null, {
      validators: [Validators.maxLength(5), Validators.required, MyValidator.mabycpomiedzy(1,10)],
      updateOn: "change"
    }),
    nazwisko: new FormControl('Nowak', Validators.maxLength(15)),
    plec: new FormControl(null, {validators: Validators.required, updateOn: "change"}),

    zyczenia: new FormGroup(
      {
        a: new FormControl(true),
        b: new FormControl(false)
      }
    ),
    typ: new FormControl(null, Validators.required),
    komentarze: new FormControl('chcialbym aby ...', Validators.maxLength(150))

  }
  );

  params: Params;

  tytul: String = 'Zapisz się';

  sub1: Subscription;

  constructor(protected listaService: ListaService, private route: ActivatedRoute, public router: Router) {
    this.sub1 = this.route.params.subscribe( (params: Params) => {
      this.params = params;
      console.log(params);
    });
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    console.log('destroy');
    this.sub1.unsubscribe();
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


    this.listaService.addCzlowiek(czlowiek).subscribe( () => {
      console.log('udalo sie zapisac czlowieka');
      alert('udalo sie zapisac czlowieka');
      this.router.navigate(['/']);
    })


  }

}

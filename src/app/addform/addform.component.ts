import {Component, Directive, ElementRef, OnInit, Pipe, Renderer2} from '@angular/core';
import { FormControl, FormGroup, Validators} from "@angular/forms";
import {Renderer} from "@angular/compiler-cli/ngcc/src/rendering/renderer";
import {ListaService} from "../lista.service";
import {Czlowiek, ZapisyService} from "../zapisy.service";
import {ActivatedRoute, Params, Router} from "@angular/router";

/*function myValidator(control: FormControl) {

    let val = control.value;
    let error = true

    Object.keys(val).forEach((key) => {
      if (val[key] === true) error = false
    });

    if (error) {
      console.log('ERR');
      return {
        coszle: 'musisz zaznaczyc min jedno zyczenie'
      }
    } else {
      console.log('OK');
      return null
    }
  }
}*/

@Pipe({
  name: "przelicz"
})
export class MyPipe {
  transform(val: number, p1: number) {
    return val * p1;
  }
}

@Directive({
  selector: "[zaznaczenie]"
})
export class MyDirective {
  constructor(el: ElementRef, private renderer: Renderer2) {
    renderer.setStyle(el.nativeElement, 'backgroundColor', 'yellow' );
    el.nativeElement.style.backgroundColor = 'yellow'
  }
}

class myValidator {
  static konfig(ilosc: number) {
    return function (control: FormControl) {

      let val = control.value;
      let error = true

      Object.keys(val).forEach((key) => {
        if (val[key] === true) error = false
      });

      if (error) {
        console.log('ERR');
        return {
          coszle: 'musisz zaznaczyc min jedno zyczenie' + ilosc
        }
      } else {
        console.log('OK');
        return null
      }
    }
  }
}


@Component({
  selector: 'app-addform',
  templateUrl: './addform.component.html',
  styleUrls: ['./addform.component.scss']
})
export class AddformComponent implements OnInit {

  params: Params;

  forma: FormGroup = new FormGroup( {
    imie: new FormControl(null, {validators: [Validators.maxLength(5), Validators.required], updateOn: 'blur'}),
    nazwisko: new FormControl('Nowak', Validators.maxLength(5)),
    plec: new FormControl(null, {validators: Validators.required, updateOn: 'change'}),
    zyczenia: new FormGroup({
        a: new FormControl(true, {validators: undefined, updateOn: 'change'}),
        b: new FormControl(false, {validators: undefined, updateOn: 'change'})
      }, {validators: myValidator.konfig(222), updateOn: 'change'}
    ),
    typ: new FormControl(null, {validators: [Validators.required], updateOn: 'change'}),
    komentarze: new FormControl('z polecenia dra', {validators: [], updateOn: 'blur'}),
    /*zyczenia: new FormArray([
    new FormControl(true),
    new FormControl(false)
  ]),*/
    }
  )

  constructor(protected zapisyService: ZapisyService, private route: ActivatedRoute, public router: Router) {
    this.route.params.subscribe(params => {
      this.params = params;
    });
  };

  ngOnInit(): void {




    this.forma.controls.zyczenia.valueChanges.subscribe( (el) => {
      console.log(el);
      this.forma.controls.zyczenia.markAllAsTouched();
    });
    this.forma.controls.plec.valueChanges.subscribe( (el) => {
      console.log(el);
      this.forma.controls.plec.markAsTouched();
    })
    this.forma.controls.typ.valueChanges.subscribe( (el) => {
      console.log(el);
      this.forma.controls.typ.markAsTouched();
    })
  }

  public ustaw() {
    this.forma.controls.imie.setValue("ala");
    this.save();
  }

  public save() {
    let czlowiek: Czlowiek = {
      imie: 'stefan',
      nazwisko: 'telefan'
    }
    this.zapisyService.add(czlowiek).subscribe((obs) => {

    });
  }

}

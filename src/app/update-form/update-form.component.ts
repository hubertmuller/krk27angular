import { Component, OnInit } from '@angular/core';
import {AddformComponent} from "../addform/addform.component";
import {Czlowiek} from "../zapisy.service";

@Component({
  selector: 'app-update-form',
  templateUrl: './../addform/addform.component.html',
  styleUrls: ['./../addform/addform.component.scss']
})
export class UpdateFormComponent extends AddformComponent implements OnInit {

  ngOnInit(): void {
    this.zapisyService.get(this.params.id).subscribe((obs) => {
      console.log('---',obs);
      this.router.navigate(['/']);
    });
    this.forma.controls.imie.setValue('Stefan');
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

    this.zapisyService.update(this.params.id, czlowiek).subscribe((obs) => {
      this.router.navigate(['/']);
    });
  }

}

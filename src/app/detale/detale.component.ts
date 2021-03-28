import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-detale',
  templateUrl: './detale.component.html',
  styleUrls: ['./detale.component.scss']
})
export class DetaleComponent implements OnInit, OnDestroy {

  public id: number;

  constructor() {
    console.log('constructror');
    this.id = 5;
  }

  ngOnInit(): void {
    console.log('oninit');
  }

  ngOnDestroy(): void {

  }

}

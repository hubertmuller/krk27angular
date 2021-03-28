import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-minidetal',
  templateUrl: './minidetal.component.html',
  styleUrls: ['./minidetal.component.scss']
})
export class MinidetalComponent implements OnInit {

  @Input()
  cena: number;

  constructor() { }

  ngOnInit(): void {

  }

}

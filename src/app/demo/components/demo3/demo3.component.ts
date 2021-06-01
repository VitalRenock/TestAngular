import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo3',
  templateUrl: './demo3.component.html',
  styleUrls: ['./demo3.component.scss']
})
export class Demo3Component implements OnInit {

  maVar1 : string = "SAluT leS gENs!"
  maVar2 : number = 10.0748
  maVar3 : Date = new Date // = Date du jour
  maVar4 : number = 25

  constructor() { }

  ngOnInit(): void {
  }

}

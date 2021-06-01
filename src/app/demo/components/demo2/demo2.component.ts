import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.scss']
})
export class Demo2Component implements OnInit {

  maVar : number = 0

  constructor() { }

  ngOnInit(): void {
  }

  plus() : void {
    this.maVar++
  }

  moins() : void {
    this.maVar--
  }

  changeColor() : void {
    document.body.style.background = "grey"
  }

}

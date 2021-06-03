import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo5',
  templateUrl: './demo5.component.html',
  styleUrls: ['./demo5.component.scss']
})
export class Demo5Component implements OnInit {

  isToggled : boolean = false
  
  liste : string[] = ["item1", "item2", "item3", "item4", "item5"]

  maVar : string = ""

  constructor() { }

  ngOnInit(): void {
  }

  toggle(): void {
    this.isToggled = !this.isToggled
  }



}

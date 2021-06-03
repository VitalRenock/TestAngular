import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo4',
  templateUrl: './demo4.component.html',
  styleUrls: ['./demo4.component.scss']
})
export class Demo4Component implements OnInit {

  currentStyle : any

  italic : boolean = false
  bold : boolean = false
  size : boolean = false
  
  class : boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  setCurrentStyle() : void {
    this.currentStyle = {
      'font-style' : this.italic ? 'italic' : 'normal',
      'font-weight' : this.bold ? 'bold' : 'normal',
      'font-size' : this.size ? '24px' : '12px'
    }
  }

  switchItalic() : void {
    this.italic = !this.italic
    this.setCurrentStyle()
  }

  switchBold() : void {
    this.bold = !this.bold
    this.setCurrentStyle()
  }

  switchSize() : void {
    this.size = !this.size
    this.setCurrentStyle()
  }

  switchClasse() : void {
    this.class = !this.class
  }

}

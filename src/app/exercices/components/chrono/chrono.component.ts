import { ConvertActionBindingResult } from '@angular/compiler/src/compiler_util/expression_converter';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-chrono',
  templateUrl: './chrono.component.html',
  styleUrls: ['./chrono.component.scss']
})
export class ChronoComponent implements OnInit, OnDestroy {

  monChrono : number = 0
  minutes : number = 0
  seconds : number = 0
  id : any

  constructor() { }

  ngOnInit(): void {
  }

  startChrono() : void {
    this.id = setInterval(() => { this.increaseChrono() }, 1000)
  }

  increaseChrono() {
    this.monChrono++
    this.minutes = Math.floor(this.monChrono / 60)
    this.seconds = this.monChrono % 60
  }

  resetChrono() {
    this.monChrono = 0
    this.minutes = 0
    this.seconds = 0
  }

  stopChrono() {
    clearInterval(this.id)
  }

  ngOnDestroy() : void {
    this.stopChrono()
  }

}

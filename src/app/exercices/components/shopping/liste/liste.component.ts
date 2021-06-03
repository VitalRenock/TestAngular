import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.scss']
})
export class ListeComponent implements OnInit {

  @Input() listToDisplay : string[] = []

  // @Output() monEvent : EventEmitter<string[]> = new EventEmitter<string[]>()

  constructor() { }

  ngOnInit(): void {
  }

  removeArticle(id : number){
    this.listToDisplay.splice(id, 1)
    // this.monEvent.emit(this.listToDisplay)
  }

}

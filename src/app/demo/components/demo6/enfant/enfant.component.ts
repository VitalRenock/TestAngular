import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Link } from 'src/app/shared/models/link.model';

@Component({
  selector: 'app-enfant',
  templateUrl: './enfant.component.html',
  styleUrls: ['./enfant.component.scss']
})
export class EnfantComponent implements OnInit {

  // Input permet de recevoir des infos du parent
  @Input() title :  string = ""
  @Input() contenu :  string = ""
  @Input() lienPourEnfant :  Link = {}
  

  // Event pour émettre des infos vers l'extérieur
  @Output() monEvent : EventEmitter<string> = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  method1() {
    this.monEvent.emit("salut")
  }

}

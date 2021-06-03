import { Component, Input, OnInit } from '@angular/core';
import { Link } from '../models/link.model';



@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  @Input() mesLinks : Link[] = []

  constructor() { }

  ngOnInit(): void {

  }

  changeToggle(id : number): void {
    this.mesLinks[id].isVisible = !this.mesLinks[id].isVisible
  }

}

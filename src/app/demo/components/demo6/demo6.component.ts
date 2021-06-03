import { Component, OnInit } from '@angular/core';
import { Link } from 'src/app/shared/models/link.model';

@Component({
  selector: 'app-demo6',
  templateUrl: './demo6.component.html',
  styleUrls: ['./demo6.component.scss']
})
export class Demo6Component implements OnInit {

  lien : Link = { title : 'lien vers google', url: 'http://www.google.be' }
  messageDuChildren : string = ""
  
  constructor() { }

  ngOnInit(): void {
  }

  reponseDuChildren(s : string) {
    this.messageDuChildren = s
  }

}

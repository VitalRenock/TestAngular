import { Component, OnInit } from '@angular/core';
import { ListeService } from './liste.service';

@Component({
  selector: 'app-demo11',
  templateUrl: './demo11.component.html',
  styleUrls: ['./demo11.component.scss']
})
export class Demo11Component implements OnInit {

  liste : string[] = []

  constructor(
    private _service : ListeService
  ) { }

  ngOnInit(): void {
    this.liste = this._service.getList()
  }

}

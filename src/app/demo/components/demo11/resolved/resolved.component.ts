import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resolved',
  templateUrl: './resolved.component.html',
  styleUrls: ['./resolved.component.scss']
})
export class ResolvedComponent implements OnInit {

  objetResolu : string = ""

  constructor(
    private _activatedRoute : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.objetResolu = this._activatedRoute.snapshot.data['monObjet']
  }

}

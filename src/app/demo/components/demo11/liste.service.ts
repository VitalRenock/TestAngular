import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListeService {

  maListe : string[] = ['item1', 'item2', 'item3']
  constructor() { }

  getList() {
    return this.maListe
  }

  getOne(id : number) {
    return this.maListe[id]
  }
}

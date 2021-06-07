import { Injectable } from '@angular/core';
import { Fan } from '../models/fan.model';

@Injectable({
  providedIn: 'root'
})
export class FanService {

  fanList : Fan[] = [
    { name: "Renaud", birthday: new Date("1987-09-17") },
    { name: "Xavier", birthday: new Date("1992-06-02") },
    { name: "Angelo", birthday: new Date("1962-10-24") }
  ]

  constructor() { }

  getAll() : Fan[] { 
    return this.fanList
  }

  get(id : number) : Fan { 
    return this.fanList[id]
  }



}

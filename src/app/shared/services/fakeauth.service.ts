import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FakeauthService {

  isConnected : boolean = false

  constructor() { }

  connect() : void {
    this.isConnected = true
  }

  disconnect() : void {
    this.isConnected = false
  }
}

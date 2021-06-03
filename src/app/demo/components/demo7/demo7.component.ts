import { Component, OnInit } from '@angular/core';
import { FakeauthService } from 'src/app/shared/services/fakeauth.service';

@Component({
  selector: 'app-demo7',
  templateUrl: './demo7.component.html',
  styleUrls: ['./demo7.component.scss']
})
export class Demo7Component implements OnInit {

  isConnected : boolean = false

  constructor(
    private _authService : FakeauthService
  ) { }

  ngOnInit(): void {
    this.isConnected = this._authService.isConnected
  }

  login() : void {
    this._authService.connect()
    this.isConnected = this._authService.isConnected
  }

  logout() : void {
    this._authService.disconnect()
    this.isConnected = this._authService.isConnected
  }

}

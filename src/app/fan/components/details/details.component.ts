import { Component, OnInit } from '@angular/core';
import { Fan } from 'src/app/shared/models/fan.model';
import { FanService } from 'src/app/shared/services/fan.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  fan : Fan = new Fan()

  constructor(
    fanService : FanService
  ) { }

  ngOnInit(): void {
  }

  getDetails(id : number) : void {
    // fan = this.fanService
  }

}

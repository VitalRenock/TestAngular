import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fan } from 'src/app/shared/models/fan.model';
import { FanService } from 'src/app/shared/services/fan.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {

  fans : Fan[] = []

  constructor(
    private fanService : FanService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.fans = this.fanService.fanList
  }

  



}

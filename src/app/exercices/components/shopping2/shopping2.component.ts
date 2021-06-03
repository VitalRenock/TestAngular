import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/shared/models/article.model';
import { ShoppingService } from 'src/app/shared/services/shopping.service';

@Component({
  selector: 'app-shopping2',
  templateUrl: './shopping2.component.html',
  styleUrls: ['./shopping2.component.scss']
})
export class Shopping2Component implements OnInit {

  articles : Article[] = []

  article : string = ""

  constructor(
    private shopService : ShoppingService
  ) { }

  ngOnInit(): void {
    this.articles = this.shopService.articles
  }

  ajout() : void {
    this.shopService.ajout(this.article)
  }

  supprimer(index : number) : void {
    this.shopService.supprimer(index)
  }
  
  addQty(index : number) : void {
    this.shopService.addQty(index)
  }
  
  removeQty(index : number) : void {
    this.shopService.removeQty(index)
  }
}

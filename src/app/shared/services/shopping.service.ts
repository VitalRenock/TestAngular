import { Injectable } from '@angular/core';
import { Article } from '../models/article.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  articles : Article[] = [
    { name: "Sel", quantity: 1 },
    { name: "Poivre", quantity: 1 },
    { name: "Curry", quantity: 1 },
  ]

  constructor() { }

  ajout(nom : string): void {
    let index = this.articles.findIndex(x => x.name == nom)
    if (index > -1) {
      this.addQty(index)
    }
    else
      this.articles.push({ name: nom, quantity: 1 })
  }

  supprimer(index : number) : void {
    this.articles.splice(index, 1)
  }

  addQty(index : number) : void {
    this.articles[index].quantity++
  }

  removeQty(index : number) : void {
    if (this.articles[index].quantity > 1) {
      this.articles[index].quantity--
    }
    else
      this.supprimer(index)
  }
}

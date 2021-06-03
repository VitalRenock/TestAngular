import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss']
})
export class ShoppingComponent implements OnInit {

  inputUser : string = ""
  shoppingList : string[] = 
  [
    "Sel",
    "Poivre"
  ]

  constructor() { }

  ngOnInit(): void {
  }

  addArticle() {
    this.shoppingList.push(this.inputUser)
  }

  // copyList(listToCopy : string[]){
  //   this.shoppingList = listToCopy
  // }

}

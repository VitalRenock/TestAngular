import { Component, OnDestroy, OnInit } from '@angular/core';

// Démo Héritage
export class MaClasseParent {
  prop : string = "Enfant prop"

  autreMethode() { 
    console.log("autreMethode()")
  }
}

// export class UserDemo {
//   id : number
//   login : string
  
// }

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.scss']
})



export class Demo1Component extends MaClasseParent implements OnInit/*, OnDestroy*/ {

  // Type primitif
  // Accesibilité: Public par défaut (private/public/protected)
  maProp : string = "Salut"
  monNum : number = 5
  maDate : Date = new Date()
  monBool : boolean = true
  monTableau : string[] = []

  // Type dynamique permettant de tout recevoir (aka: var en c#)
  obj : any

  // tab : UserDemo[] = [new UserDemo()]

  // super() = Pour héritage, équivalant 'base' en c#
  constructor() { super() }

  // Appelé après la création du composant
  ngOnInit(): void {
    this.obj = { nom: 'Brigode', prenom: 'Renaud' }
    console.log(this.obj.nom)
  }

  // Nom de méthode () : Type de retour { Corps méthode }
  maMethod () : void {

  }

  // // Appelé avant la destruction du composant
  // ngOnDestroy(): void {
  //   console.log("On repart")
  // }

}



import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { MinChar } from './validators/MinChar.validator';

@Component({
  selector: 'app-demo8',
  templateUrl: './demo8.component.html',
  styleUrls: ['./demo8.component.scss']
})
export class Demo8Component implements OnInit {

  // 1) On crée une variable de type FormGroup
  // FormGroup peut recevoir des valeurs de type FormControl ou FormArray ou FOrmGroup
  myFormGroup : FormGroup	= this._builder.group({})

  constructor(
    private _builder : FormBuilder
  ) { }

  ngOnInit(): void {

    // 2) Pour initialiser un nouveau FormGroup, utiliser le FormBuilder en lui spécifiant les FormControl ou FormArray qu'il contient
    this.myFormGroup = this._builder.group({

      // Déclaration d'un Nouveau FormControl dans le FormGroup
      nomControl : [null, [this.Min6Char()]],
      
      // Pour déclarer plusieurs Validators, insérer ceux-ci dans un tableau
      emailControl : [null, [MinChar(5), Validators.pattern("[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}")]],

      // Pour déclarer un tableau pouvant recevoir dynamiquement plusieurs FormControls, utiliser le type FormArray
      // Utiliser le FormBuilder pour construire un FormArray vide
      gameListControl : this._builder.array([])

    //Validation global pour le FormGroup
    }/*, Validators.required*/)
  }

  // Méthode pour récupérer un FormArray dans un FormGroup
  getArray() : FormArray {
    return this.myFormGroup.get('gameListControl') as FormArray
  }

  // Méthode pour ajouter un nouveau FormControl dans le FormArray
  addControlToArray() {
    this.getArray().push(new FormControl(null, Validators.required))
  }

  Min6Char() : null | ValidatorFn {
    // On retourne une méthode anonyme qui prends en paramètre un FormControl
    return (control : AbstractControl) => 
    {
      let myValue : string = control.value
      if (myValue == null) return null
      if (myValue == "") return {NullError : "Le champs ne peut être vide" }
      if (myValue.length < 6 ) return {TropCourtError : "Le champs doit contenir minimum 6 caractères" }
      return null
    }
  }

  // Permet de soummettre le formulaire et récupérer les valeurs dans les contrôles
  onSubmit() : void {
    console.log("Nom = " + this.myFormGroup.value['nomControl'])
    console.log("Email = " + this.myFormGroup.value['emailControl'])
  }
}
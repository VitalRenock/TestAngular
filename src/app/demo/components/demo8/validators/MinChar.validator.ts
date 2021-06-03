import { AbstractControl, ValidatorFn } from "@angular/forms";

// Utilisable partout
export function MinChar(longueur : number) : ValidatorFn {
        // On retourne une méthode anonyme qui prends en paramètre un FormControl
        return (control : AbstractControl) => 
        {
          let myValue : string = control.value
          if (myValue == null) return null
          if (myValue == "") return { NullError : "Le champs ne peut être vide" }
          let regex = new RegExp("[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}")
          if (!regex.test(control.value)) return { FormatError: "Ne correspond pas au format d'un email" }
          if (myValue.length < longueur ) return { TropCourtError : "Le champs doit contenir minimum " + longueur +" 6 caractères" }
          return null
        }
}
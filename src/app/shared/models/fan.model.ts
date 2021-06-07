import { Serie } from "./serie.model"

export class Fan {
    public name : string = ""
    public birthday : Date = new Date()
    public serie? : Serie[]
  }
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { ListeService } from './liste.service';

@Injectable({
  providedIn: 'root'
})
export class ObjectResolverResolver implements Resolve<string> {

  constructor(
    private _liste : ListeService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): string {
    let index = route.params['index']
    return this._liste.getOne(index)
  }
}

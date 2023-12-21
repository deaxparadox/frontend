import { Injectable } from '@angular/core';
import { Heading, Task } from '../models';

export type S = Heading | Task | null;

@Injectable({
  providedIn: 'root'
})
export class SelectService {

  constructor() { }

  #select?: S;

  set(s: S) {
    this.#select = s;
  }
  get() {
    return this.#select;
  }
}

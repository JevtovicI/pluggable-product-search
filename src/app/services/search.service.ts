import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  searchTerm = new EventEmitter<string>();

  constructor() { }
}

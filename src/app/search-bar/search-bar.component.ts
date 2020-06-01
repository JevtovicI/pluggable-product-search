import { Component, OnInit, OnChanges } from '@angular/core';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

  term: string;

  constructor(private searchService: SearchService) { }

  onSearch(event): void {
    this.searchService.searchTerm.emit(event);
  }

}

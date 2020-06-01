import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/search.service';

interface ResultItem {
  title: string;
  tags: string[];
  imageUrl: string;
}

@Component({
  selector: 'app-items-panel',
  templateUrl: './items-panel.component.html',
  styleUrls: ['./items-panel.component.css']
})
export class ItemsPanelComponent implements OnInit {

  items = new Array<ResultItem>();
  searchTerm: string;

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
    this.searchService.searchTerm.subscribe(response => {
      this.searchTerm = response;
    });

    this.items.push({
      title: 'Cats',
      tags: ['animal', 'cat'],
      imageUrl: 'https://static01.nyt.com/images/2019/10/01/science/00SCI-CATS1/merlin_102054072_34962289-a2a4-4c52-9969-4b2719347e76-jumbo.jpg?quality=90&auto=webp'
    },
    {
      title: 'Dogs',
      tags: ['animal', 'dog'],
      imageUrl: 'https://cdn.vox-cdn.com/thumbor/kMUzmk2XIYTClaR2JNzu_4UBio0=/0x0:4560x3041/1220x813/filters:focal(1916x1157:2644x1885):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/58504395/911428568.jpg.0.jpg'
    },
    {
      title: 'Birds',
      tags: ['animal', 'bird'],
      imageUrl: 'https://images2.minutemediacdn.com/image/upload/c_crop,h_1188,w_2121,x_0,y_142/f_auto,q_auto,w_1100/v1554733134/shape/mentalfloss/78996-istock-682216682.jpg'
    });
  }

}

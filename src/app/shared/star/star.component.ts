import { Component, OnChanges,Input } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
  star:string;
  starWidth:number;
  @Input() rating: number;
  imageUrl:string="./assets/images/star.jfif"

  constructor() { }
  ngOnChanges(): void{
    this.starWidth= this.rating*86/5;

  }

}

import { Component, OnInit, HostListener,  } from '@angular/core';
import { Entry } from '../../models/Entry';
import {EntryService} from '../../services/entry.service';
import {
  trigger,
  style,
  animate,
  transition,
  stagger,
  query
} from '@angular/animations';


@Component({
  selector: 'app-main-grid',
  templateUrl: './main-grid.component.html',
  styleUrls: ['./main-grid.component.css'],
  animations: [
    trigger('fade', [
      transition('* => *', [
        query(':enter', [ style({opacity: 0})]),
        query(':enter', [
          stagger(500 ,[animate(1000, style({ opacity: 1 }))])
        ], { optional: true }),
      ])
    ])
  ]
})

export class MainGridComponent implements OnInit {

  entryList:Entry[];
  listToShow:Entry[] = [];
  height:number = 1000;
  lastY = window.pageYOffset;
  yOffset = 0;

  constructor(private entryService:EntryService) { }

  ngOnInit(): void {
    this.entryList = this.entryService.getEntries();
    this.listToShow = this.entryList.slice(0,5);

  }

  @HostListener('window:scroll', ['$event']) onWindowScroll($event) {
      //this.listToShow.pop();
      //this.listToShow.push(this.entryList.pop());
      let yOffsetDiff = this.lastY - window.pageYOffset;
      console.log(yOffsetDiff)
      if(yOffsetDiff < -100){
        this.listToShow.push(this.entryList.pop());
        this.height = this.height + 100;
        this.lastY =  window.pageYOffset
      }




  }

}

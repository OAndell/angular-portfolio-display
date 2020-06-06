import { Component, OnInit } from '@angular/core';
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

  constructor(private entryService:EntryService) { }

  ngOnInit(): void {
    this.entryList = this.entryService.getEntries();
  }

}

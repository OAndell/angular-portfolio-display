import { Component, OnInit } from '@angular/core';
import { Entry } from '../../models/Entry';
import {EntryService} from '../../services/entry.service';

@Component({
  selector: 'app-main-grid',
  templateUrl: './main-grid.component.html',
  styleUrls: ['./main-grid.component.css']
})
export class MainGridComponent implements OnInit {

  entryList:Entry[];

  constructor(private entryService:EntryService) { }

  ngOnInit(): void {
    this.entryList = this.entryService.getEntries();
  }

}

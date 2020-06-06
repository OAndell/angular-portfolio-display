import { Component, OnInit, Input} from '@angular/core';
import  {Entry} from '../../models/Entry';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {
  @Input() entry:Entry
  constructor() { }

  ngOnInit(): void {


  }

  onClick(){
    window.open(this.entry.link);
  }

}

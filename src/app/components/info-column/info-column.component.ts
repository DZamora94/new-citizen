import { Info } from './../../models/info';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-info-column',
  templateUrl: './info-column.component.html',
  styleUrls: ['./info-column.component.scss']
})
export class InfoColumnComponent implements OnInit {

  @Input() infoSet: Info[];

  constructor() { }

  ngOnInit() {
  }

}

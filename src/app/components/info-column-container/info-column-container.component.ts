import { Info } from './../../models/info';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-info-column-container',
  templateUrl: './info-column-container.component.html',
  styleUrls: ['./info-column-container.component.scss']
})
export class InfoColumnContainerComponent implements OnInit {

  @Input() image: string;
  @Input() infoSet: Info[];

  constructor() { }

  ngOnInit() {
  }

}

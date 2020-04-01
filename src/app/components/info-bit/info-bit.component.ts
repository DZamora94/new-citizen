import { Info } from './../../models/info';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-info-bit',
  templateUrl: './info-bit.component.html',
  styleUrls: ['./info-bit.component.scss']
})
export class InfoBitComponent implements OnInit {

  @Input() info: Info;

  constructor() { }

  ngOnInit() {
  }

}

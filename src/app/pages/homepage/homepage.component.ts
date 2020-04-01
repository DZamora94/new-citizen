import { Component, OnInit } from '@angular/core';
import { infoSet, serviceButtons } from './data';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  public serviceButtons = serviceButtons;
  public infoSet = infoSet;

  constructor() { }

  ngOnInit() {
  }

}

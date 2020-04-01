import { ServiceButton } from './../../models/buttons';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-services-container',
  templateUrl: './services-container.component.html',
  styleUrls: ['./services-container.component.scss']
})
export class ServicesContainerComponent implements OnInit {

  @Input() title: string;
  @Input() serviceButtons: ServiceButton[];

  constructor() { }

  ngOnInit() {
  }

}

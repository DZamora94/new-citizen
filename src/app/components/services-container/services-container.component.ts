import { ServiceButton } from './../../models/buttons';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-services-container',
  templateUrl: './services-container.component.html',
  styleUrls: ['./services-container.component.scss']
})
export class ServicesContainerComponent implements OnInit {

  @Input() serviceButtons: ServiceButton[] = [
    {
      label: 'Work',
      color: 'primary',
      image: 'assets/icon/work.svg',
      redirection: 'services/work',
    },
    {
      label: 'Home',
      color: 'primary',
      image: 'assets/icon/home.svg',
      redirection: 'services/home',
    },
    {
      label: 'Taxes',
      color: 'primary',
      image: 'assets/icon/fingerprint.svg',
      redirection: 'services/taxes',
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

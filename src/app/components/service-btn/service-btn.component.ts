import { Component, OnInit, Input } from '@angular/core';
import { ServiceButton } from 'src/app/models/buttons';

@Component({
  selector: 'app-service-btn',
  templateUrl: './service-btn.component.html',
  styleUrls: ['./service-btn.component.scss']
})
export class ServiceBtnComponent implements OnInit {

  @Input() button: ServiceButton;

  constructor() { }

  ngOnInit() {
  }

}

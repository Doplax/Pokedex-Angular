import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-preogress-bar',
  templateUrl: './preogress-bar.component.html',
  styleUrls: ['./preogress-bar.component.scss']
})
export class PreogressBarComponent implements OnInit {
  @Input() color = 'bug';
  @Input() value = 0;
  @Input() height = 20;

  constructor() {

  }

  ngOnInit(): void {

  }


}

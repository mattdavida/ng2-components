import { Component, OnInit } from '@angular/core';

import { DataService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  headers = [
    'test header 1',
    'test header 2',
    'test header 3',
    'test header 4',
    'test header 5',
    'test header 6',
    'test header 7',
    'test header 8',
    'test header 9',
    'test header 10',
    'test header 11',
    'test header 12',
  ];

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.makeData();
  }


}

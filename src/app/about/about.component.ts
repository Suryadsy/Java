import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  aboutInfo: any;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.aboutInfo = this.dataService.getAboutInfo();
  }
}

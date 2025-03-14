import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeData: any[] = [];
  apiData: any;
  featuredService = { name: '', description: '' }; // Define a featured service object
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.homeData = this.dataService.getHomeData();
    this.dataService.getApiData().subscribe(data => {
      this.apiData = data;
    });
  }
}

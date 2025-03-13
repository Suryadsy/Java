import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactInfo: any[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.contactInfo = this.dataService.getContactInfo();
  }
}

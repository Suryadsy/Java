import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() { }

  // Sample data for the home page (e.g., featured items or services)
  getHomeData() {
    const homeData = [
      { title: 'Welcome to Our Website', description: 'We provide excellent services.' },
      { title: 'Featured Service: Web Development', description: 'Build robust web applications with our expert team.' },
      { title: 'Featured Service: Mobile App Development', description: 'Get your ideas into users hands with amazing mobile apps.' },
    ];
    return homeData;
  }

  // Sample data for the about page
  getAboutInfo() {
    const aboutData = {
      companyName: 'ABC Inc.',
      founded: 2025,
      mission: 'To deliver innovative tech solutions to clients worldwide.',
      vision: 'To be a leader in technology, creating solutions that improve lives.',
      teamSize: 150
    };
    return aboutData;
  }

  // Sample data for the contact page (e.g., locations or contact methods)
  getContactInfo() {
    const contactData = [
      { type: 'Email', value: 'contact@abc.com' },
      { type: 'Phone', value: '+1 987 654 3210' },
      { type: 'Address', value: 'Cincinnati, OH' }
    ];
    return contactData;
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) {}

  // Get data from dummy API
  getApiData(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // Sample data for the home page (e.g., featured items or services)
  getHomeData() {
    const homeData = [
      { title: 'Welcome to Our Website', description: 'We provide excellent services.' },
      { title: 'Featured Service: Web Development', description: 'Build robust web applications with our expert team.' },
      { title: 'Featured Service: Mobile App Development', description: 'Get your ideas into users hands with amazing mobile apps.' },
    ];

    // Using map to transform the data (creating an array of titles)
    const titles = homeData.map(item => item.title);  // Arrow function used in map
    console.log(titles);  // Output the titles for illustration

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

    // Using object spread operator to clone and add extra data to aboutData
    const updatedAboutData = { ...aboutData, location: 'Cincinnati, OH' };  // Spread operator
    console.log(updatedAboutData);  // Output the updated object

    return updatedAboutData;
  }

  // Sample data for the contact page (e.g., locations or contact methods)
  getContactInfo() {
    const contactData = [
      { type: 'Email', value: 'contact@abc.com' },
      { type: 'Phone', value: '+1 987 654 3210' },
      { type: 'Address', value: 'Cincinnati, OH' },
      { type: 'Fax', value: '+1 987 654 3211' },  // Added a new contact method
    ];

    // Using filter to get only contact methods that are not 'Fax'
    const filteredContactMethods = contactData.filter(contact => contact.type !== 'Fax');  // filter to exclude fax
    console.log(filteredContactMethods);  // Output the filtered contact methods

    // Using find to find a specific contact method (e.g., Phone)
    const phoneContact = contactData.find(contact => contact.type === 'Phone');  // find specific contact
    console.log(phoneContact);  // Output the phone contact details

    return contactData;
  }
}

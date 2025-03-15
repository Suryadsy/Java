import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { EmployeeService } from '../employee.service'; // Import EmployeeService

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeData: any[] = [];
  apiData: any;  // To store data from the dummy API
  featuredService = { name: '', description: '' }; // Featured service object
  employees: any[] = []; // Store employee data
  loading = true; // Show loading while fetching employee data
  errorMessage: string | null = null; // For error handling

  constructor(
    private dataService: DataService,
    private employeeService: EmployeeService // Inject EmployeeService
  ) { }

  ngOnInit() {
    // Fetch home data from DataService
    this.homeData = this.dataService.getHomeData();

    // Fetch data from the dummy API using DataService
    this.dataService.getApiData().subscribe(data => {
      this.apiData = data;
    });

    // Fetch employee data using EmployeeService
    this.employeeService.getEmployees().subscribe(
      data => {
        this.employees = data; // Assign employee data to the employees array
        this.loading = false;   // Hide loading once data is fetched
      },
      error => {
        this.errorMessage = 'Error fetching employee data!'; // Show error message on failure
        this.loading = false;   // Hide loading
      }
    );
  }

  // Method to open employee details on click
  openEmployeeDetails(employee: any) {
    alert(`Employee Name: ${employee.name}\nEmail: ${employee.email}`); // Display employee details
  }
}

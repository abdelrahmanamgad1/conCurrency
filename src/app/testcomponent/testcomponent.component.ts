import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Import the HttpClient module

@Component({
  selector: 'app-test',
  templateUrl: '/testcomponent.component.html',
})
export class TestComponent {
  data=""
   stableUrl = "https://jsonplaceholder.typicode.com/todos/10"
   damagedUrl = "https://jsonplaceholder.typicode.com/todos/1p"
  constructor(private http: HttpClient) {}

  triggerError() {
    this.http.get(this.damagedUrl).subscribe(res => {
      this.data = JSON.stringify(res)
          })  
  }

  testUrl() {
    this.http.get(this.stableUrl).subscribe(res => {
      this.data = JSON.stringify(res)
          })  
  }
}

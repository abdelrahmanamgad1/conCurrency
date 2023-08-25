import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Import the HttpClient module

@Component({
  selector: 'app-test',
  template: '<button (click)="triggerError()">Trigger Error</button>',
})
export class TestComponent {
  constructor(private http: HttpClient) {}

  triggerError() {
    this.http.get('https://example.com/nonexistent-url').subscribe();
  }
}

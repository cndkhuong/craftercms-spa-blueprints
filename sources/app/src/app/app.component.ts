import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Fetching...';
  constructor(private http: HttpClient) {
    http.get('http://127.0.0.1:8080/api/hello.json', { withCredentials: true })
      .subscribe((response: string) => this.title = response);
  }
}

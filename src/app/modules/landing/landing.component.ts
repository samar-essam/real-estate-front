import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent {
  constructor(http: HttpClient) {
    http
      .get('http://localhost:3000/getAll')
      .subscribe((res) => console.log(res));
  }
}

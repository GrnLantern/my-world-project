import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'World Map';
  metaData = {};
  countries = [];
  countryName: string = '';

  constructor(private httpClient: HttpClient) {

    this.httpClient.get('http://api.worldbank.org/v2/country/all/indicator/SP.POP.TOTL?format=json').subscribe((data: any) => {
      this.metaData = data;
      this.countries = data.Countries;
    });
  }
 

  MouseOver(hoverName: HTMLElement, hoverName1: HTMLElement) {
    hoverName.style.fill = 'red';
    hoverName1.style.fill = 'red';
  }
  MouseOut(hoverName: HTMLElement, hoverName1: HTMLElement) {
    hoverName.style.fill = '';
    hoverName1.style.fill = '';
  }
 
}

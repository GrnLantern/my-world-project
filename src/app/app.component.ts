import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'World Map';
  countries: any [] = [];
  countryName = '';
  countryValue: any  = {};

  
  

  constructor(private httpClient: HttpClient) {

    // this.httpClient2.get('https://api.worldbank.org/v2/country/all/indicator/SP.POP.TOTL?source=2&date=2022&format=json&per_page=2022').subscribe((data: any)=>{
    //   this.dataSet = data[1];
      
    // });
    this.httpClient.get('http://api.geonames.org/countryInfoJSON?username=afis343').subscribe((data: any) => {
      this.countries = data.geonames;
      console.log(this.countries);
     
    });
    
  }
 

  MouseOver(hoverName: HTMLElement, hoverName1: HTMLElement) {
    
    this.countryName = ((hoverName.className as any).baseVal);

  
    hoverName.style.fill = 'red';
    hoverName1.style.fill = 'red';
   
  }
  MouseOut(hoverName: HTMLElement, hoverName1: HTMLElement) {
    hoverName.style.fill = '';
    hoverName1.style.fill = '';
  }
  onClick() {
    
  this.countryValue = this.countries.find(c  => c.countryName === this.countryName);
 

    
  }

}


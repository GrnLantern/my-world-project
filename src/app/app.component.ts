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
  countryValue: any = null;
  dataSet: any [] = [];
  countryInfo: any = null;

  
  

  constructor(private httpClient: HttpClient, private httpClient2: HttpClient) {

    this.httpClient2.get('https://api.worldbank.org/v2/country?format=json&per_page=300').subscribe((data: any)=>{
      this.dataSet = data[1];
      
    });
    this.httpClient.get('http://api.geonames.org/countryInfoJSON?username=afis343').subscribe((data: any) => {
      this.countries = data.geonames;
     
     
    });
    
  }
 
  MouseOver(...elements: HTMLElement[]){
   for (const element of elements){
    element.style.fill = 'red';
   }
   this.countryName = ((elements[0].className as any).baseVal);
  }
  MouseOut(...elements: HTMLElement[]) {
  for (const element of elements){
    element.style.fill = '';
   }
   this.countryName = '';
 }
  onClick() {
    
  this.countryValue = this.countries.find(c  => c.countryName === this.countryName);
  this.countryInfo = this.dataSet.find(c => c.name === this.countryName);

    
  }

}


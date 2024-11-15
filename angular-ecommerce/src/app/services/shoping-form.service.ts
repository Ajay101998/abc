import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { Country } from '../common/country';
import { State } from '../common/state';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ShopingFormService {

  private countriesUrl = environment['ecommerceApiUrl'] + '/countries';
  private statesUrl = environment['ecommerceApiUrl'] +'/states';


  constructor(private httpClient: HttpClient) { }

  getCountries(): Observable<Country[]>{
    return this.httpClient.get<GetResponseCountries>(this.countriesUrl).pipe(
      map(response => response._embedded.countries)
    );
  }

  getStates(theCountryCode: string): Observable<State[]>{
    
    // search URL
    const searchStatesUrl = `${this.statesUrl}/search/findByCountryCode?code=${theCountryCode}`;

    return this.httpClient.get<GetResponseStates>(searchStatesUrl).pipe(
      map(response => response._embedded.states)
    );
  }

  getCreditCardMonths(startMonth: number): Observable<number[]>{

    let data: number[]= [];

    // build an array for "Month" dropdown list
    // - start at current month and loop until

    for(let theMonth= startMonth; theMonth <= 12; theMonth++){
      data.push(theMonth);

    }

    // NOTE: The "of" operator from rxjs will wrap an object as an Observable
    return of(data);
  }


  getCreditCardYear(): Observable<number[]>{
    let data: number[] = [];

    // build an array for "YEAR" downlist list
    // - start at current year and loop for next 10 year

    const startYear: number = new Date().getFullYear();
    const endYear: number = startYear + 10;

    for(let theYear = startYear; theYear <= endYear; theYear++)
    {
      data.push(theYear);
    }

    // NOTE: The "of" operator from rxjs will wrap an object as an Observable
    return of(data);

  }
}


interface GetResponseCountries{
  _embedded: {
    countries: Country[];
  }
}

interface GetResponseStates{
  _embedded:{
    states: State[];
  }
}
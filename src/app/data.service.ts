import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const url = 'https://data.api.thelott.com/sales/vmax/web/data/lotto/latestresults';

export interface WinningNumbers {
  primaryNumbers: Array<number>;
  secondaryNumbers: Array<number>;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getWinningNumbers(param): Observable<WinningNumbers> {
    return this.http.post<any>(url, param).pipe(
      map((result): WinningNumbers => {
        return {
          primaryNumbers: result.DrawResults[0].PrimaryNumbers.sort((a, b) => a - b),
          secondaryNumbers: result.DrawResults[0].SecondaryNumbers
        };
      })
    );
  }


}

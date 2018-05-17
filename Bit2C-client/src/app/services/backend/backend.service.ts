import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ErrorObservable } from "rxjs/observable/ErrorObservable";
import { catchError, map } from "rxjs/operators";
import { TickerResponse } from "./tickerResponse";

@Injectable()
export class BackendService {
  private readonly API_URL: string = "http://localhost:56934/bit2c"; // Lev: This should be configured in the environment, so we can configure it differently in production...

  constructor(private readonly http: HttpClient) {}

  public getTicker(pair: string) {
    return this.http
      .get<any>(`${this.API_URL}/Ticker?Pair=${pair}`, {
        responseType: "json"
      })
      .pipe(
        map(response => {
          let tickerData = new TickerResponse(
            response.LastPrice,
            response.HighestBuyOrderPrice,
            response.LowestSellOrderPrice,
            response.AverageVolume,
            response.AveragePrice
          );
          return tickerData;
        }),
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error("An error occurred:", error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an ErrorObservable with a user-facing error message
    return new ErrorObservable(
      "Something bad happened; please try again later."
    );
  }
}

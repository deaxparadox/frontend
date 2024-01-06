import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { Heading } from './models';

import { ErrorMessage } from './error';

@Injectable({
  providedIn: 'root'
})
export class PmsHttpService extends ErrorMessage {
  url_headings_v1 = "http://localhost:8000/api/pms/v1/"

  constructor(
    private httpclient: HttpClient
  ) {
    super();
  }

  get_headings(): Observable<Heading[]> {
    return this.httpclient.get<Heading[]>(this.url_headings_v1).pipe(catchError(this.handleError))
  }
  get_heading(id: string | null): Observable<Heading> {
    return this.httpclient.get<Heading>(`${this.url_headings_v1}${id}/`)
  }
}

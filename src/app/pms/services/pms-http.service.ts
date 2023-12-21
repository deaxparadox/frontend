import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Heading } from './models';



@Injectable({
  providedIn: 'root'
})
export class PmsHttpService {
  url_headings_v1 = "http://localhost:8000/api/pms/v1/"

  constructor(
    private httpclient: HttpClient
  ) { }

  get_headings(): Observable<Heading[]> {
    return this.httpclient.get<Heading[]>(this.url_headings_v1)
  }
  get_heading(id: string | null): Observable<Heading> {
    return this.httpclient.get<Heading>(`${this.url_headings_v1}${id}/`)
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Manicurist } from 'src/app/models/manicurist/manicurist';

@Injectable({
  providedIn: 'root',
})
export class ManicuristService {
  private baseUrl: string = 'http://localhost:8080/manicurist/list';

  constructor(private _httpClient: HttpClient) {}

  getManicurists(): Observable<Manicurist[]> {
    return this._httpClient
      .get<Manicurist[]>(this.baseUrl)
      .pipe(map((response) => response));
  }
}

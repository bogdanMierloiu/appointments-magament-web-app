import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { NailsCare } from 'src/app/models/nails-care/nails-care';
import { CreateNailsCare } from '../../models/nails-care/create-nails-care';

@Injectable({
  providedIn: 'root',
})
export class NailsCareService {
  private baseUrl: string = 'http://localhost:8080/nails-service';

  constructor(private _httpClient: HttpClient) {}

  getNailsCare(): Observable<NailsCare[]> {
    return this._httpClient
      .get<NailsCare[]>(`${this.baseUrl}/list`)
      .pipe(map((response) => response));
  }

  createNailsCare(nailsCare: CreateNailsCare): Observable<CreateNailsCare> {
    return this._httpClient.post<CreateNailsCare>(
      `${this.baseUrl}/create`,
      nailsCare
    );
  }

  
}

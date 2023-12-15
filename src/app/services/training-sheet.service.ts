import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TrainingSheet } from '../models/training_sheet';
@Injectable({
  providedIn: 'root'
})
export class TrainingSheetService {

  constructor(private http: HttpClient) { }

  private readonly apiUrl = 'http://localhost:3000/TrainingSheet';

  getTrainingSheet(): Observable<TrainingSheet> {
    return this.http.get<TrainingSheet>(this.apiUrl);
  }
}

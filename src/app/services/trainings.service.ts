import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrainingsService {

  constructor(private http:HttpClient) { }

  getAllTrainings(){
    return this.http.get('https://localhost:7125/api/Trainings/getAllTrainings')

  }
}

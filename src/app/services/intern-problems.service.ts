import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InternProblemsService {

  private basicURL = 'https://localhost:7125/api/InternProblems/InternProblems'

  constructor(private http:HttpClient) { }

  getAllInternProblems(){
    return this.http.get(this.basicURL)
  }
}

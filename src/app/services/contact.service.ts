import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private basicURL = 'https://localhost:7125/api/CourseProblems/CourseProblems'

  constructor(private http:HttpClient) { }

  getAllJobs(){
    return this.http.get(this.basicURL)
  }
}

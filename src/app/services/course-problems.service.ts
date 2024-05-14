import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseProblemsService {
  private basicURL = 'https://localhost:7125/api/CourseProblems/CourseProblems'

  constructor(private http:HttpClient) { }

  getAllCourseProblems(){
    return this.http.get(this.basicURL)
  }
}

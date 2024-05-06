import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private apiURL ='https://localhost:7125/api/Courses/addCourse'
  private basicURL = 'https://localhost:7125/api/Courses'


  constructor(private http:HttpClient) { }

  getAllCourses(){
    return this.http.get('https://localhost:7125/api/Courses/getAllCourses')
  }

  postCourse(data: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.apiURL, data, { headers });
}

deleteCourseById(id: number): Observable<void> {
  return this.http.delete<void>(`${this.basicURL}/${id}`);
}


}

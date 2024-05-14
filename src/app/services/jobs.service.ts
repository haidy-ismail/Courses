import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobsService  {

  private apiURL ='https://localhost:7125/api/Job/addjob'
  private basicURL = 'https://localhost:7125/api/Job'

  constructor(private http:HttpClient) { }

  getAllJobs(){
    return this.http.get('https://localhost:7125/api/Job/getAllJobs')
  }

  postJob(data: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.apiURL, data, { headers });
}

deleteJobById(id: number): Observable<void> {
  return this.http.delete<void>(`${this.basicURL}/${id}`);
}
}

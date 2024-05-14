import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http:HttpClient) { }

  // private apiURL = 'https://localhost:7125/api/News/addNews'
  private apiURL = 'https://localhost:7125/api/Newsss/addNews'
  // private basicURL = 'https://localhost:7125/api/News'
  private basicURL = 'https://localhost:7125/api/Newsss'


  getAllNews(){
    return this.http.get('https://localhost:7125/api/Newsss')

  }

  postNews(data: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.apiURL, data, { headers });
}

deleteNewsById(id: number): Observable<void> {
  return this.http.delete<void>(`${this.basicURL}/${id}`);
}

updateNewsById(id: number, data: any): Observable<void> {
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  return this.http.put<void>(`${this.basicURL}/${id}`, data, { headers });
}


}

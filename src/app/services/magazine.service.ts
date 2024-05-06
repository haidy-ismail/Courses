import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MagazineService {

  private apiURL ='https://localhost:7125/api/Magazine/addMagazine'
  private basicURL = 'https://localhost:7125/api/Magazine'


  constructor(private http:HttpClient) { }


  getAllMagazines(){
    return this.http.get('https://localhost:7125/api/Magazine/getAllMagazines')

  }

  postMagazine(data: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.apiURL, data, { headers });
}

deleteMagazineById(id: number): Observable<void> {
  return this.http.delete<void>(`${this.basicURL}/${id}`);
}

updateMagazineById(id: number, data: any): Observable<void> {
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  return this.http.put<void>(`${this.basicURL}/${id}`, data, { headers });
}
  
}

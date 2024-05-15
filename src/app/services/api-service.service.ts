import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  private baseUrl : string = 'https://localhost:7125/api/User/';

  // private apiUrl : string = 'https://localhost:7125/api';
  private apiUrl : string = environment.apiUrl;
  constructor(private http: HttpClient) { }
  getUsers(){
    return this.http.get<any>(this.baseUrl);
  }

  addConstructionFound(con: any): Observable<any> {
    console.log(con);
    // return this.http.post<any>(`${this.apiUrl + 'ConstructionFound/createConstructionOfEnrollment'}`, con);
    // return this.http.post<any>('https://localhost:7125/api/ConstructionFound/getAllApplications', con);
    return this.http.post<any>(`${this.apiUrl +'ConstructionFound'}/createConstructionOfEnrollment`,con)

  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tag } from 'src/app/Interfaces';
@Injectable({
  providedIn: 'root'
})
export class TagService {
  private apiUrl = 'http://localhost:3000/tags';
  constructor(private http: HttpClient) { }
  getTags(): Observable<Tag[]>{
    return this.http.get<Tag[]>(this.apiUrl)
  }
}

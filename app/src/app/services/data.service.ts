import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private url = 'http://localhost:3100';

  constructor(private http: HttpClient) {

  }

  public getAll() {
    const posts = this.http.get(this.url + '/api/posts')
    return posts;
  }

  getById(id: string) {
    return this.http.get(this.url + '/api/post/' + id);
  }
}


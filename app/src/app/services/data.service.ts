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

  likePost(id: string, likeUpdate: number, dislikeUpdate: number) {
    const body = {
      like: likeUpdate,
      dislike: dislikeUpdate
    }

    return this.http.patch(this.url + '/api/post/' + id + "/like", body);
  }

  deletePost(id: string) {
    return this.http.delete(this.url + "/api/post/" + id);
  }
}


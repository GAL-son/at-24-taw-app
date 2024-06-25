import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

import { LikesForPost } from '../../models/likes';

@Injectable({
  providedIn: 'root'
})
export class MemoryService {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  storeLikes(id:string, like: boolean | null) {
   
    const localStorage = this.document.defaultView?.localStorage;

    const likes = this.getLikes();    
    console.log(likes);
    likes[id] = like;
    console.log(likes);
    console.log(JSON.stringify(likes));


    localStorage?.setItem("likes", JSON.stringify(likes));   

  }

  private getLikes(): LikesForPost {
    const localStorage = this.document.defaultView?.localStorage;

    const likesMap = localStorage?.getItem("likes");

    if(!likesMap) {  
      return {} as LikesForPost;
    } else {
      return JSON.parse(likesMap) as LikesForPost;
    }
  }

  public memoryGetLikeForPost(id:string) {
    const likes = this.getLikes();
    console.log(likes);
    console.log(likes[id]);
    return this.getLikes()[id] ;
  }
}

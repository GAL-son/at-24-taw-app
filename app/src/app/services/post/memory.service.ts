import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

import { LikesForPost } from '../../models/likes';

@Injectable({
  providedIn: 'root'
})
export class MemoryService {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  storeLikes(id: string, like: boolean | null) {

    const localStorage = this.document.defaultView?.localStorage;

    const likes = this.getLikes();
    likes[id] = like;
    localStorage?.setItem("likes", JSON.stringify(likes));

  }

  private getLikes(): LikesForPost {
    const localStorage = this.document.defaultView?.localStorage;

    const likesMap = localStorage?.getItem("likes");

    if (!likesMap) {
      return {} as LikesForPost;
    } else {
      return JSON.parse(likesMap) as LikesForPost;
    }
  }

  public memoryGetLikeForPost(id: string) {
    return this.getLikes()[id];
  }

  public static parseLikesFromChange(change: any) {
    let store: boolean | null = null;
    const sum = change.like + change.dislike;

    if (sum > 0) {
      if (change.like == 1) {
        store = true;
      } else {
        store == false;
      }
    }

    return store;
  }
}

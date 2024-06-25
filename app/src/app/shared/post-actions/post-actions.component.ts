import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { MemoryService } from '../../services/post/memory.service';
import { CommonModule } from '@angular/common';
import { Clipboard } from '@angular/cdk/clipboard';
import { PostService } from '../../services/post/post.service';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'post-actions',
  standalone: true,
  imports: [ButtonComponent, CommonModule],
  providers: [MemoryService, DataService],
  templateUrl: './post-actions.component.html',
  styleUrl: './post-actions.component.css'
})
export class PostActionsComponent implements OnInit {
  @Input() id?: string;
  @Input() likes: number = 0;
  @Input() dislikes: number = 0;
  @Input('display-alert') displayAlert = false;


  liked: boolean = false;
  disliked: boolean = false;
  copied = false;

  constructor(public memory: MemoryService, private dataService: DataService, private clipboard: Clipboard) { }

  ngOnInit(): void {
    if (this.id == undefined) {
      return;
    }
    const memeoryLike = this.memory.memoryGetLikeForPost(this.id);
    if (memeoryLike) {
      this.liked = true;
    } else if (memeoryLike != null) {
      this.disliked = true;
    }
  }

  public like(value: boolean, like: boolean) {
    if (this.id == undefined) {
      return;
    }
    const id = this.id;

    const change = {
      like: 0,
      dislike: 0
    }


    if (like) {
      // Post liked
      this.liked = value;
      change.like = (value) ? 1 : -1;
      if (this.liked && this.disliked) {
        this.disliked = false;
        change.dislike = -1;
      }
    } else {
      // Post disliked
      this.disliked = value;
      change.dislike = (value) ? 1 : -1;
      if (this.disliked && this.liked) {
        this.liked = false;
        change.like = -1;
      }
    }

    this.dataService.likePost(id, change.like, change.dislike)
      .subscribe((res) => {
        this.memory.storeLikes(id, MemoryService.parseLikesFromChange(change));
        this.likes += change.like;
        this.dislikes += change.dislike;
      });

  }

  public share() {
    this.clipboard.copy("http://localhost:4200" + '/blog/details/' + this.id);
    this.copied = true;

    if(this.displayAlert) {
      alert("Link copied")
    }

    setTimeout(() => {
      this.copied = false;
    }, 2000)
  }


  public getValue(num: number): string {
    return String(num);
  }
}

import { Component, Input, Output, EventEmitter, input, OnInit } from '@angular/core';
import { BlogItemImageComponent } from '../blog-item-image/blog-item-image.component';
import { BlogItemTextComponent } from '../blog-item-text/blog-item-text.component';
import { BlogItemTitleComponent } from '../blog-item-title/blog-item-title.component';
import { ButtonComponent } from '../../shared/button/button.component';
import { Post } from '../../models/post';
import { LineComponent } from '../../shared/line/line.component';
import { CommonModule } from '@angular/common';
import { MemoryService } from '../../services/post/memory.service';
import { DataService } from '../../services/data.service';
import {Clipboard} from '@angular/cdk/clipboard';
import { PostActionsComponent } from '../../shared/post-actions/post-actions.component';
@Component({
  selector: 'blog-item',
  standalone: true,
  imports: [CommonModule, BlogItemImageComponent, BlogItemTextComponent, BlogItemTitleComponent, ButtonComponent, LineComponent, PostActionsComponent],
  providers: [MemoryService, DataService],
  templateUrl: './blog-item.component.html',
  styleUrl: './blog-item.component.css'
})

export class BlogItemComponent implements OnInit {
  @Input('post-data') postData?: Post;
  @Input() id?: string;
  @Output() onLikeChange = new EventEmitter<number>();
  @Output() onGoToPost = new EventEmitter<string>();

  public title: string = "";
  public text: string = "";
  public image: string = "";
  public likes: number = 0;
  public dislikes: number = 0;

  public copied = false;

  constructor(public memory: MemoryService, private dataService: DataService, private clipboard: Clipboard ){}

  ngOnInit(): void {
    this.title = this.postData?.title ?? this.title;
    this.text = this.postData?.text ?? this.text;
    this.image = this.postData?.image ?? this.image;
    this.likes = this.postData?.likes ?? this.likes;
    this.dislikes = this.postData?.dislikes ?? this.dislikes

    if(this.id == undefined) {
      return;
    }
    const memeoryLike = this.memory.memoryGetLikeForPost(this.id);
    if(memeoryLike) {
      this.liked = true;
    } else if(memeoryLike != null) {
      this.disliked = true;
    }

  }

  public liked: boolean = false;
  public disliked: boolean = false;

  public goToPost() {
    this.onGoToPost.emit(this.getPath());
  }

  public share() {
    // this.clipboard.writeText("http://localhost:4200" + this.getPath())
    this.clipboard.copy("http://localhost:4200" + this.getPath());
    this.copied = true;

    setTimeout(() => {
      this.copied = false;
    }, 2000)
  }


  public getPath(): string {
    return '/blog/details/' + this.id;
  }

  public getValue(num: number): string {
    return String(num);
  }

  public getMemoryLike(isDlislike = false): boolean {
    if(this.id == undefined) {
      return false;
    }

    const like = this.memory.memoryGetLikeForPost(this.id);
    console.log(this.id, like);
    

    if(like == null) {return false;}

    return (isDlislike) ? !like: like ;
  }
}

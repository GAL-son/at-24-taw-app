import { Component, Input, Output, EventEmitter, input, OnInit } from '@angular/core';
import { BlogItemImageComponent } from '../blog-item-image/blog-item-image.component';
import { BlogItemTextComponent } from '../blog-item-text/blog-item-text.component';
import { RouterModule } from '@angular/router';
import { BlogItemTitleComponent } from '../blog-item-title/blog-item-title.component';
import { ButtonComponent } from '../../shared/button/button.component';
import { Post } from '../../models/post';
import { LineComponent } from '../../shared/line/line.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'blog-item',
  standalone: true,
  imports: [CommonModule, BlogItemImageComponent, BlogItemTextComponent, BlogItemTitleComponent, ButtonComponent, LineComponent],
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

  ngOnInit(): void {
    this.title = this.postData?.title ?? this.title;
    this.text = this.postData?.text ?? this.text;
    this.image = this.postData?.image ?? this.image;
    this.likes = this.postData?.likes ?? this.likes;
    this.dislikes = this.postData?.dislikes ?? this.dislikes
  }

  public goToPost() {
    this.onGoToPost.emit(this.getPath());
  }

  public share() {
    console.log("SHARE http://localhost:4200" + this.getPath());
    this.copied = true;

    setTimeout(() => {
      this.copied = false;
    }, 2000)
  }

  public like($event: boolean) {
    if($event) {
      this.likes++;
    } else {
      this.likes--;
    }
  }

  public dislike($event: boolean) {
    if($event) {
      this.dislikes++;
    } else {
      this.dislikes--;
    }
  }

  public getPath(): string {
    return '/blog/details/' + this.id;
  }

  public getValue(num: number): string {
    return String(num);
  }
}

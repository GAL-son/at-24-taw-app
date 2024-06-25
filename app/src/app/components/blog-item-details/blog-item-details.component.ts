import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ActivatedRoute } from '@angular/router';
import { LineComponent } from '../../shared/line/line.component';
import { BlogItemImageComponent } from '../blog-item-image/blog-item-image.component';
import { CommonModule } from '@angular/common';
import { PostActionsComponent } from '../../shared/post-actions/post-actions.component';

@Component({
  selector: 'blog-item-details',
  standalone: true,
  imports: [HttpClientModule, LineComponent, BlogItemImageComponent, CommonModule, PostActionsComponent],
  providers: [DataService],
  templateUrl: './blog-item-details.component.html',
  styleUrl: './blog-item-details.component.css'
})
export class BlogItemDetailsComponent implements OnInit {
  public image: string = '';
  public text: string = '';
  public title: string = '';
  public likes: number = 0;
  public dislikes: number = 0;
  public id: string = "";

  public loading: boolean = true;

  constructor(private service: DataService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
      this.route.paramMap.subscribe((params: any) => {
        this.id = params.get('id');
      });

      this.service.getById(this.id).subscribe((res: any) => {
        console.log(res);
        
        this.image = res[0].image;
        this.text = res[0].text;
        this.title = res[0].title;
        this.likes = res[0].likes;
        this.dislikes = res[0].dislikes;
        this.loading = false;
      })
  }

  public onImageLoaded() {
    this.loading = false;
  }
}

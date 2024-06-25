import { Component, OnInit } from '@angular/core';
import { SearchBarComponent } from '../../shared/search-bar/search-bar.component';
import { BlogComponent } from '../blog/blog.component';
import { ButtonComponent } from '../../shared/button/button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'blog-home',
  standalone: true,
  imports: [SearchBarComponent, BlogComponent, ButtonComponent, CommonModule],
  templateUrl: './blog-home.component.html',
  styleUrl: './blog-home.component.css'
})
export class BlogHomeComponent implements OnInit{
  public filterText: string = '';
  public canSortBy = [
    "None",
    "Likes",
    "Dislikes",
    "Title"
  ]

  public sortBy: string = 'None';
  public asc: boolean = false;

  constructor() {

  }

  ngOnInit(): void {
      
  }

  onSortChange($event: any) {    
    this.sortBy = $event.target.value;    
  }

  onChangeAsc($event: boolean) {
    this.asc = $event;
  }

  getName($event: string): void {
    this.filterText = $event;
  }
}

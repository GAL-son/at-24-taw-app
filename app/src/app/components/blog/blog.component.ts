import { Component, Input, OnInit, input } from '@angular/core';
import { DataService } from "../../services/data.service";
import { BlogItemComponent } from "../blog-item/blog-item.component";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from '@angular/common/http';
import { FilterTextPipe } from '../../pipes/filter-text.pipe';
import { Router } from '@angular/router';
import { SortPostsPipe } from '../../pipes/sort-posts.pipe';

@Component({
  selector: 'blog',
  standalone: true,
  imports: [BlogItemComponent, CommonModule, HttpClientModule, FilterTextPipe, SortPostsPipe],
  providers: [DataService, ],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent implements OnInit {
  @Input() filterText: string = "";
  @Input() sortBy: string = "likes";
  @Input() sortAsc: boolean = false;
  
  public isEnabled() : boolean {
    return true
  }


  
  public items: any;

  constructor(private service: DataService, private router: Router) {
  }

  ngOnInit() {    
    this.getAll();    
  }

  getAll() {
    this.service.getAll().subscribe(response => {
      this.items = response;      
    })
  }

  public goToPost(path: string) {
    this.router.navigate([path]);
  }

}


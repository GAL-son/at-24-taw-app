import { Component, Input } from '@angular/core';

@Component({
  selector: 'blog-item-title',
  standalone: true,
  imports: [],
  templateUrl: './blog-item-title.component.html',
  styleUrl: './blog-item-title.component.css'
})
export class BlogItemTitleComponent {
  @Input() title?: string;
}

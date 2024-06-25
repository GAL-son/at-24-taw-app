import { Component, EventEmitter, Input, Output,  } from '@angular/core';
import { HideEmptyImageDirective } from '../../directives/hide-empty-image.directive';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'blog-item-image',
  standalone: true,
  imports: [HideEmptyImageDirective, CommonModule],
  templateUrl: './blog-item-image.component.html',
  styleUrl: './blog-item-image.component.css'
})
export class BlogItemImageComponent {
  @Input() image?: string;
  @Output() load = new EventEmitter();

  loading = true;
  
  public onLoad() {
    this.loading = false;
    this.load.emit(true);
  }

  public onError(event: any) {    
    this.loading = false;
    this.load.emit(false);
  }
}

import { Component, OnInit } from '@angular/core';
import { PlaceholderImageDirective } from '../../directives/placeholder-image.directive';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-post',
  standalone: true,
  imports: [PlaceholderImageDirective, FormsModule],
  templateUrl: './add-post.component.html',
  styleUrl: './add-post.component.css'
})
export class AddPostComponent implements OnInit{
  public post = {
    title: '',
    text: '',
    imageUrl: ''
    }    
    
  constructor() {}
  ngOnInit(): void {}
}

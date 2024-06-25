import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'line',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './line.component.html',
  styleUrl: './line.component.css'
})
export class LineComponent {
  @Input() color: string = "#000000";
  @Input() height: string = "2px";
}

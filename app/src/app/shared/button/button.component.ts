import { CommonModule } from '@angular/common';
import { EventEmitter, Component, Input, OnInit, Output, input } from '@angular/core';
import { BlobOptions } from 'buffer';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent implements OnInit{
  @Input() value: string = "";
  @Input() image: string = "";  
  @Input() toggle?: boolean = undefined;


  @Output() onClick = new EventEmitter();
  ngOnInit(): void {}

  public click() {
    if(this.toggle == undefined) {
      this.onClick.emit("");
    } else {
      console.log("TOGGLE BTN + " + this.toggle);
      
      // this.toggle = !this.toggle;
      this.onClick.emit(!this.toggle);
    }
  }  

  public applyToggle() : boolean {
    return (this.toggle!= undefined) && this.toggle;
  }

  public getImagePath() {
    return this.image + '_dark.svg';
  }
}

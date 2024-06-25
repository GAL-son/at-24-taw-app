import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogItemTitleComponent } from './blog-item-title.component';

describe('BlogItemTitleComponent', () => {
  let component: BlogItemTitleComponent;
  let fixture: ComponentFixture<BlogItemTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogItemTitleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlogItemTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostComponentComponent } from './post-component.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

describe('PostComponentComponent', () => {
  let component: PostComponentComponent;
  let fixture: ComponentFixture<PostComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PostComponentComponent],
      imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  fit('should contain inputElement', () => {
    const inputElement: HTMLElement = fixture.nativeElement;
    const input = inputElement.querySelector('input');
    expect(input).toBeTruthy();
  });

  fit('should contain buttonElement', () => {
    const buttonElement: HTMLElement = fixture.nativeElement;
    const btn = buttonElement.querySelector('button');
    expect(btn.innerHTML).toBeTruthy();
  });
  fit('should contain textareaElement', () => {
    const textareaElement: HTMLElement = fixture.nativeElement;
    const textarea = textareaElement.querySelector('textarea');
    expect(textarea.name).toBeTruthy();
  });


});

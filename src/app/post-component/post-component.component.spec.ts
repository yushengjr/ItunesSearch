import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import {
  PostComponentComponent,
  defualtShowNum
} from "./post-component.component";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { PostService } from "../service/post.service";
import { Observable, Subject, of } from "rxjs";

const PostServiceStub = {
  onGet: () => of(postsDataMock),
  onPost: () => {}
};

const postsDataMock = new Array(100).fill("").map((item, index) => {
  return {
    userId: 1,
    id: index,
    body: "test",
    title: "test"
  };
});

describe("PostComponentComponent", () => {
  let component: PostComponentComponent;
  let fixture: ComponentFixture<PostComponentComponent>;
  let subSpy: jasmine.Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PostComponentComponent],
      imports: [FormsModule],
      providers: [
        {
          provide: PostService,
          useValue: PostServiceStub
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostComponentComponent);
    component = fixture.componentInstance;
    subSpy = spyOn(component, "sub").and.callThrough();
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeDefined();
  });

  it("should contain inputElement for title", () => {
    const inputElement: HTMLElement = fixture.nativeElement;
    const input = inputElement.querySelector("input.title");
    expect(input).toBeTruthy();
  });

  it("should contain buttonElement with class 'submit' ", () => {
    const buttonElement: HTMLElement = fixture.nativeElement;
    const btn = buttonElement.querySelector("button.submit");
    expect(btn).toBeTruthy();
  });
  // fit("should contain textareaElement", () => {
  //   const textareaElement: HTMLElement = fixture.nativeElement;
  //   const textarea = textareaElement.querySelector("textarea");
  //   expect(textarea.name).toBeTruthy();
  // });

  it(`should show ${defualtShowNum} post-rows with 100 post-rows data`, () => {
    expect(subSpy).toHaveBeenCalledWith(postsDataMock, defualtShowNum);
    const componetNE: HTMLElement = fixture.nativeElement;
    const postList = componetNE.querySelectorAll("tr.post-row");
    expect(postList.length).toBe(defualtShowNum);
  });
});

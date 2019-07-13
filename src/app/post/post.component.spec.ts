// import { FormsModule } from "@angular/forms";
// import { async, ComponentFixture, TestBed } from "@angular/core/testing";

// import { PostComponent } from "./post.component";
// import { of } from "rxjs";
// import { DataService } from "../service/data.service";

// const PostServiceStub = {
//   getInfo: () => of(postsDataMock),
//   saveInfo: () => {}
// };

// const postsDataMock = new Array(100).fill("").map((item, index) => {
//   return {
//     userId: 1,
//     id: index + 1,
//     body: "test",
//     title: "test"
//   };
// });

// describe("PostComponent", () => {
//   let component: PostComponent;
//   let fixture: ComponentFixture<PostComponent>;
//   let spy: jasmine.Spy;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [PostComponent],
//       imports: [FormsModule],
//       providers: [
//         {
//           provide: DataService,
//           useValue: PostServiceStub
//         }
//       ]
//     }).compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(PostComponent);
//     component = fixture.componentInstance;
//     spy = spyOn(component, "onSubmit").and.callThrough();
//     fixture.detectChanges();
//   });

//   it("should create", () => {
//     expect(component).toBeTruthy();
//   });

//   it("should contain input Element for title", () => {
//     const inputElement: HTMLElement = fixture.nativeElement;
//     const input = inputElement.querySelector("input.title");
//     expect(input).toBeTruthy();
//   });

//   it("should contain textarea Element for body", () => {
//     const textareaElement: HTMLElement = fixture.nativeElement;
//     const textarea = textareaElement.querySelector("textarea.body");
//     expect(textarea).toBeTruthy();
//   });

//   it("should contain button Element for body", () => {
//     const buttonElement: HTMLElement = fixture.nativeElement;
//     const button = buttonElement.querySelector("button.submit");
//     expect(button).toBeTruthy();
//   });

//   it("should show 100 post-rows data", () => {
//     const componentNe: HTMLElement = fixture.nativeElement;
//     const postList = componentNe.querySelectorAll("tr.post-row");
//     expect(postList.length).toBe(100);
//   });

//   it("should call the button click event", async(() => {
//     const componentNe: HTMLElement = fixture.nativeElement;
//     const button = componentNe.querySelector("button.submit");
//     button.click();
//     fixture.whenStable().then(() => {
//       expect(spy).toHaveBeenCalled();
//     });
//   }));
// });

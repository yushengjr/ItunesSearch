import { SearchService } from "../../../service/search.service";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SearchComponent } from "./search.component";
import { FormsModule } from "@angular/forms";
import { of } from "rxjs";

const SearchServiceStub = {
  search: () => of(searchDataMock)
};
const searchDataMock = new Array(4).fill("").map((item, index) => {
  return {
    userId: 1,
    id: index + 1,
    body: "test",
    title: "test"
  };
});

describe("SearchComponent", () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchComponent],
      imports: [FormsModule],
      providers: [
        {
          provide: SearchService,
          useUrl: SearchServiceStub
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

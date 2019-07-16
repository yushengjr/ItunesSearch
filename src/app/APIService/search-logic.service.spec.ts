import { TestBed } from '@angular/core/testing';

import { SearchLogicService } from './search-logic.service';

describe('SearchLogicService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchLogicService = TestBed.get(SearchLogicService);
    expect(service).toBeTruthy();
  });
});

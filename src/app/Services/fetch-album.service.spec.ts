import { TestBed } from '@angular/core/testing';

import { FetchAlbumService } from './fetch-album.service';

describe('FetchAlbumService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FetchAlbumService = TestBed.get(FetchAlbumService);
    expect(service).toBeTruthy();
  });
});

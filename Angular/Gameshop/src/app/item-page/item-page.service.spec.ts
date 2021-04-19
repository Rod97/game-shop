import { TestBed } from '@angular/core/testing';

import { ItemPageService } from './item-page.service';

describe('ItemPageService', () => {
  let service: ItemPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { GetListDataService } from './get-list-data.service';

describe('GetListDataService', () => {
  let service: GetListDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetListDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

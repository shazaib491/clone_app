import { TestBed } from '@angular/core/testing';

import { AdminFetchService } from './admin-fetch.service';

describe('AdminFetchService', () => {
  let service: AdminFetchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminFetchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

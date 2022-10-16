import { TestBed } from '@angular/core/testing';

import { NgxUselessService } from './ngx-useless.service';

describe('NgxUselessService', () => {
  let service: NgxUselessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxUselessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

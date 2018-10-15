import { TestBed, inject } from '@angular/core/testing';

import { TableService } from './table-service.service';

describe('TableServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TableService]
    });
  });

  it('should be created', inject([TableService], (service: TableService) => {
    expect(service).toBeTruthy();
  }));
});

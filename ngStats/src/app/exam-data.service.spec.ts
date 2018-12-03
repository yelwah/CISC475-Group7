import { TestBed } from '@angular/core/testing';

import { ExamDataService } from './exam-data.service';

describe('ExamDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExamDataService = TestBed.get(ExamDataService);
    expect(service).toBeTruthy();
  });
});

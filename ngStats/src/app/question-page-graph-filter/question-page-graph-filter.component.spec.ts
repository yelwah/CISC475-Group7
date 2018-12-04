import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionPageGraphFilterComponent } from './question-page-graph-filter.component';

describe('QuestionPageGraphFilterComponent', () => {
  let component: QuestionPageGraphFilterComponent;
  let fixture: ComponentFixture<QuestionPageGraphFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionPageGraphFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionPageGraphFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

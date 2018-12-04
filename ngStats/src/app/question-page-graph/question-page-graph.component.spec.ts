import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionPageGraphComponent } from './question-page-graph.component';

describe('QuestionPageGraphComponent', () => {
  let component: QuestionPageGraphComponent;
  let fixture: ComponentFixture<QuestionPageGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionPageGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionPageGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

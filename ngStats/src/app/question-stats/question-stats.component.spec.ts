import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionStatsComponent } from './question-stats.component';

describe('QuestionStatsComponent', () => {
  let component: QuestionStatsComponent;
  let fixture: ComponentFixture<QuestionStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

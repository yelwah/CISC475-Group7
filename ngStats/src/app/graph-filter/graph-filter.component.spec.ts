import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphFilterComponent } from './graph-filter.component';

describe('GraphFilterComponent', () => {
  let component: GraphFilterComponent;
  let fixture: ComponentFixture<GraphFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

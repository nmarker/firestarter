import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchcandidatesComponent } from './searchcandidates.component';

describe('SearchcandidatesComponent', () => {
  let component: SearchcandidatesComponent;
  let fixture: ComponentFixture<SearchcandidatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchcandidatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchcandidatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

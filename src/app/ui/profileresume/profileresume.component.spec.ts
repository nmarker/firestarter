import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileresumeComponent } from './profileresume.component';

describe('ProfileresumeComponent', () => {
  let component: ProfileresumeComponent;
  let fixture: ComponentFixture<ProfileresumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileresumeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileresumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingprofileComponent } from './onboardingprofile.component';

describe('OnboardingprofileComponent', () => {
  let component: OnboardingprofileComponent;
  let fixture: ComponentFixture<OnboardingprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnboardingprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnboardingprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

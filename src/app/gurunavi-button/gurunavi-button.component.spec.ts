import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GurunaviButtonComponent } from './gurunavi-button.component';

describe('GurunaviButtonComponent', () => {
  let component: GurunaviButtonComponent;
  let fixture: ComponentFixture<GurunaviButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GurunaviButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GurunaviButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

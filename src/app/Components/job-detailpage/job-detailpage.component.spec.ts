import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobDetailpageComponent } from './job-detailpage.component';

describe('JobDetailpageComponent', () => {
  let component: JobDetailpageComponent;
  let fixture: ComponentFixture<JobDetailpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JobDetailpageComponent]
    });
    fixture = TestBed.createComponent(JobDetailpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

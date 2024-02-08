import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportOpertionsComponent } from './report-opertions.component';

describe('ReportOpertionsComponent', () => {
  let component: ReportOpertionsComponent;
  let fixture: ComponentFixture<ReportOpertionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReportOpertionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReportOpertionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionOperationsComponent } from './question-operations.component';

describe('QuestionOperationsComponent', () => {
  let component: QuestionOperationsComponent;
  let fixture: ComponentFixture<QuestionOperationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuestionOperationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuestionOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

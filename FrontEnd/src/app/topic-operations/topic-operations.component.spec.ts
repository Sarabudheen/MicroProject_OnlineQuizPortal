import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicOperationsComponent } from './topic-operations.component';

describe('TopicOperationsComponent', () => {
  let component: TopicOperationsComponent;
  let fixture: ComponentFixture<TopicOperationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopicOperationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopicOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

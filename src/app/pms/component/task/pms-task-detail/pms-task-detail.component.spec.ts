import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PmsTaskDetailComponent } from './pms-task-detail.component';

describe('PmsTaskDetailComponent', () => {
  let component: PmsTaskDetailComponent;
  let fixture: ComponentFixture<PmsTaskDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PmsTaskDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PmsTaskDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

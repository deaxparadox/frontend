import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PmsTasksComponent } from './pms-tasks.component';

describe('PmsTasksComponent', () => {
  let component: PmsTasksComponent;
  let fixture: ComponentFixture<PmsTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PmsTasksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PmsTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

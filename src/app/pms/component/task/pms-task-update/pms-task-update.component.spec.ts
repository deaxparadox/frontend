import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PmsTaskUpdateComponent } from './pms-task-update.component';

describe('PmsTaskUpdateComponent', () => {
  let component: PmsTaskUpdateComponent;
  let fixture: ComponentFixture<PmsTaskUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PmsTaskUpdateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PmsTaskUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

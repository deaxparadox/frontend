import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PmsTaskCreateComponent } from './pms-task-create.component';

describe('PmsTaskCreateComponent', () => {
  let component: PmsTaskCreateComponent;
  let fixture: ComponentFixture<PmsTaskCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PmsTaskCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PmsTaskCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentralTrainingComponent } from './central-training.component';

describe('CentralTrainingComponent', () => {
  let component: CentralTrainingComponent;
  let fixture: ComponentFixture<CentralTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentralTrainingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CentralTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

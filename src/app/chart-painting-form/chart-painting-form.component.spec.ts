import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartPaintingFormComponent } from './chart-painting-form.component';

describe('ChartPaintingFormComponent', () => {
  let component: ChartPaintingFormComponent;
  let fixture: ComponentFixture<ChartPaintingFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartPaintingFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartPaintingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

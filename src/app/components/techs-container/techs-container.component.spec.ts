import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechsContainerComponent } from './techs-container.component';

describe('TechsContainerComponent', () => {
  let component: TechsContainerComponent;
  let fixture: ComponentFixture<TechsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechsContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

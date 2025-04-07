import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificatesContainerComponent } from './certificates-container.component';

describe('CertificatesContainerComponent', () => {
  let component: CertificatesContainerComponent;
  let fixture: ComponentFixture<CertificatesContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CertificatesContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CertificatesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

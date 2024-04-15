import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwardsTypeComponent } from './awards-type.component';

describe('AwardsTypeComponent', () => {
  let component: AwardsTypeComponent;
  let fixture: ComponentFixture<AwardsTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AwardsTypeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AwardsTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManicuristComponent } from './manicurist.component';

describe('ManicuristComponent', () => {
  let component: ManicuristComponent;
  let fixture: ComponentFixture<ManicuristComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManicuristComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManicuristComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

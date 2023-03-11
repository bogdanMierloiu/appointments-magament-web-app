import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NailsCareComponent } from './nails-care.component';

describe('NailsCareComponent', () => {
  let component: NailsCareComponent;
  let fixture: ComponentFixture<NailsCareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NailsCareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NailsCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

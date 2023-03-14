import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNailsCareComponent } from './add-nails-care.component';

describe('AddNailsCareComponent', () => {
  let component: AddNailsCareComponent;
  let fixture: ComponentFixture<AddNailsCareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNailsCareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNailsCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

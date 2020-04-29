import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerPasajeroComponent } from './ver-pasajero.component';

describe('VerPasajeroComponent', () => {
  let component: VerPasajeroComponent;
  let fixture: ComponentFixture<VerPasajeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerPasajeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerPasajeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

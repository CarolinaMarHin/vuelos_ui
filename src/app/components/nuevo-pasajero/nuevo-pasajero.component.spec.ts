import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoPasajeroComponent } from './nuevo-pasajero.component';

describe('NuevoPasajeroComponent', () => {
  let component: NuevoPasajeroComponent;
  let fixture: ComponentFixture<NuevoPasajeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoPasajeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoPasajeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

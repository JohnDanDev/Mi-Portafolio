import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectoVistaComponent } from './proyecto-vista.component';

describe('ProyectoVistaComponent', () => {
  let component: ProyectoVistaComponent;
  let fixture: ComponentFixture<ProyectoVistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProyectoVistaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectoVistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

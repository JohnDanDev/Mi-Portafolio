import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienciaVistaComponent } from './experiencia-vista.component';

describe('ExperienciaVistaComponent', () => {
  let component: ExperienciaVistaComponent;
  let fixture: ComponentFixture<ExperienciaVistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperienciaVistaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienciaVistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

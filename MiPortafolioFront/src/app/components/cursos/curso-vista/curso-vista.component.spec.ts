import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoVistaComponent } from './curso-vista.component';

describe('CursoVistaComponent', () => {
  let component: CursoVistaComponent;
  let fixture: ComponentFixture<CursoVistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CursoVistaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursoVistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

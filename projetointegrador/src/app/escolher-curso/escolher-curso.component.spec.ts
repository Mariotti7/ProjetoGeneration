import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscolherCursoComponent } from './escolher-curso.component';

describe('EscolherCursoComponent', () => {
  let component: EscolherCursoComponent;
  let fixture: ComponentFixture<EscolherCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscolherCursoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EscolherCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

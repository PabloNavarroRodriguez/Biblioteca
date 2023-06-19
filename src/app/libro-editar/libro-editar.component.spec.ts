import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibroEditarComponent } from './libro-editar.component';

describe('LibroEditarComponent', () => {
  let component: LibroEditarComponent;
  let fixture: ComponentFixture<LibroEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibroEditarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibroEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

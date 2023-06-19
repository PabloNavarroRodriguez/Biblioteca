import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudLibrosAdminComponent } from './crud-libros-admin.component';

describe('CrudLibrosAdminComponent', () => {
  let component: CrudLibrosAdminComponent;
  let fixture: ComponentFixture<CrudLibrosAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudLibrosAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudLibrosAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

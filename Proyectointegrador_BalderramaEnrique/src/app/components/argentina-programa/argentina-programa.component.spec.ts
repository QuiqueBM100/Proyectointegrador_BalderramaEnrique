import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArgentinaProgramaComponent } from './argentina-programa.component';

describe('ArgentinaProgramaComponent', () => {
  let component: ArgentinaProgramaComponent;
  let fixture: ComponentFixture<ArgentinaProgramaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArgentinaProgramaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArgentinaProgramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

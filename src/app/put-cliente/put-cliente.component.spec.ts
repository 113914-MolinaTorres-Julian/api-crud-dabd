import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutClienteComponent } from './put-cliente.component';

describe('PutClienteComponent', () => {
  let component: PutClienteComponent;
  let fixture: ComponentFixture<PutClienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PutClienteComponent]
    });
    fixture = TestBed.createComponent(PutClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

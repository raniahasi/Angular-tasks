import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lecature2Component } from './lecature2.component';

describe('Lecature2Component', () => {
  let component: Lecature2Component;
  let fixture: ComponentFixture<Lecature2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lecature2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lecature2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

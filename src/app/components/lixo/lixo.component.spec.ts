import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LixoComponent } from './lixo.component';

describe('LixoComponent', () => {
  let component: LixoComponent;
  let fixture: ComponentFixture<LixoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LixoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LixoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

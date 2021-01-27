import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilEditComponent } from './accueil-edit.component';

describe('AccueilEditComponent', () => {
  let component: AccueilEditComponent;
  let fixture: ComponentFixture<AccueilEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccueilEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccueilEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

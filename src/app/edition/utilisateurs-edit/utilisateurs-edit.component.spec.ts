import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilisateursEditComponent } from './utilisateurs-edit.component';

describe('UtilisateursEditComponent', () => {
  let component: UtilisateursEditComponent;
  let fixture: ComponentFixture<UtilisateursEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtilisateursEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilisateursEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

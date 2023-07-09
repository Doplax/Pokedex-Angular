import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreogressBarComponent } from './preogress-bar.component';

describe('PreogressBarComponent', () => {
  let component: PreogressBarComponent;
  let fixture: ComponentFixture<PreogressBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PreogressBarComponent]
    });
    fixture = TestBed.createComponent(PreogressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

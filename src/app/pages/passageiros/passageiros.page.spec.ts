import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PassageirosPage } from './passageiros.page';

describe('PassageirosPage', () => {
  let component: PassageirosPage;
  let fixture: ComponentFixture<PassageirosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PassageirosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

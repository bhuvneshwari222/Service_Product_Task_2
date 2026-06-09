import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdCardsComponent } from './prod-cards.component';

describe('ProdCardsComponent', () => {
  let component: ProdCardsComponent;
  let fixture: ComponentFixture<ProdCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsChatComponent } from './products-chat.component';

describe('ProductsChatComponent', () => {
  let component: ProductsChatComponent;
  let fixture: ComponentFixture<ProductsChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsChatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

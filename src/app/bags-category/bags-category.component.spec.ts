import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BagsCategoryComponent } from './bags-category.component';

describe('BagsCategoryComponent', () => {
  let component: BagsCategoryComponent;
  let fixture: ComponentFixture<BagsCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BagsCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BagsCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

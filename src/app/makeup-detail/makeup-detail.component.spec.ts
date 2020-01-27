import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeupDetailComponent } from './makeup-detail.component';

describe('MakeupDetailComponent', () => {
  let component: MakeupDetailComponent;
  let fixture: ComponentFixture<MakeupDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeupDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeupDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

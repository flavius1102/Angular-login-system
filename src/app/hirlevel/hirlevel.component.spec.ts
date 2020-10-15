import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HirlevelComponent } from './hirlevel.component';

describe('HirlevelComponent', () => {
  let component: HirlevelComponent;
  let fixture: ComponentFixture<HirlevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HirlevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HirlevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShotgunsComponent } from './shotguns.component';

describe('ShotgunsComponent', () => {
  let component: ShotgunsComponent;
  let fixture: ComponentFixture<ShotgunsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShotgunsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShotgunsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

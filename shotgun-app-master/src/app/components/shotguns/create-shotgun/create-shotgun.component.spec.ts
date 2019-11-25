import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateShotgunComponent } from './create-shotgun.component';

describe('CreateShotgunComponent', () => {
  let component: CreateShotgunComponent;
  let fixture: ComponentFixture<CreateShotgunComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateShotgunComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateShotgunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

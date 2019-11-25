import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateShotgunDialogComponent } from './create-shotgun-dialog.component';

describe('CreateShotgunDialogComponent', () => {
  let component: CreateShotgunDialogComponent;
  let fixture: ComponentFixture<CreateShotgunDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateShotgunDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateShotgunDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

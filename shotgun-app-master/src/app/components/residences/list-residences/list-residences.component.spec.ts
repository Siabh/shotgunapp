import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListResidencesComponent } from './list-residences.component';

describe('ListResidencesComponent', () => {
  let component: ListResidencesComponent;
  let fixture: ComponentFixture<ListResidencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListResidencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListResidencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

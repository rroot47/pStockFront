import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddScategorieComponent } from './add-scategorie.component';

describe('AddScategorieComponent', () => {
  let component: AddScategorieComponent;
  let fixture: ComponentFixture<AddScategorieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddScategorieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddScategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

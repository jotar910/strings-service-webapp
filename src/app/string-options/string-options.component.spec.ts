import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StringOptionsComponent } from './string-options.component';

describe('StringOptionsComponent', () => {
  let component: StringOptionsComponent;
  let fixture: ComponentFixture<StringOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StringOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StringOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

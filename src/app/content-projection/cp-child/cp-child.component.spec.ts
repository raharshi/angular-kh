import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpChildComponent } from './cp-child.component';

describe('CpChildComponent', () => {
  let component: CpChildComponent;
  let fixture: ComponentFixture<CpChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CpChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CpChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

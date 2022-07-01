import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpParentComponent } from './cp-parent.component';

describe('CpParentComponent', () => {
  let component: CpParentComponent;
  let fixture: ComponentFixture<CpParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CpParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CpParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

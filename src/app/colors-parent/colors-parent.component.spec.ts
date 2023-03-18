import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorsParentComponent } from './colors-parent.component';

describe('ColorsParentComponent', () => {
  let component: ColorsParentComponent;
  let fixture: ComponentFixture<ColorsParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorsParentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorsParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

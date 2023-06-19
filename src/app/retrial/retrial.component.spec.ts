import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetrialComponent } from './retrial.component';

describe('RetrialComponent', () => {
  let component: RetrialComponent;
  let fixture: ComponentFixture<RetrialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetrialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetrialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

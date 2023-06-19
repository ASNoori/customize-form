import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleDarkThemeComponent } from './sample-dark-theme.component';

describe('SampleDarkThemeComponent', () => {
  let component: SampleDarkThemeComponent;
  let fixture: ComponentFixture<SampleDarkThemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampleDarkThemeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SampleDarkThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

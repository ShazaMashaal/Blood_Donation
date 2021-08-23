import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoGiveBloodComponent } from './who-give-blood.component';

describe('WhoGiveBloodComponent', () => {
  let component: WhoGiveBloodComponent;
  let fixture: ComponentFixture<WhoGiveBloodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhoGiveBloodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhoGiveBloodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

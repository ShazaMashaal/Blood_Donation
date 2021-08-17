import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyGiveBloodComponent } from './why-give-blood.component';

describe('WhyGiveBloodComponent', () => {
  let component: WhyGiveBloodComponent;
  let fixture: ComponentFixture<WhyGiveBloodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhyGiveBloodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyGiveBloodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

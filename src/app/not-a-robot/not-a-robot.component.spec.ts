import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotARobotComponent } from './not-a-robot.component';

describe('NotARobotComponent', () => {
  let component: NotARobotComponent;
  let fixture: ComponentFixture<NotARobotComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotARobotComponent]
    });
    fixture = TestBed.createComponent(NotARobotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

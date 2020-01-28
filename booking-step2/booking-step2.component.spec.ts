import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BookingStep2Component } from './booking-step2.component';

describe('BookingStep2Component', () => {
  let component: BookingStep2Component;
  let fixture: ComponentFixture<BookingStep2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingStep2Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BookingStep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

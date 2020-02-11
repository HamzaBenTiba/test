import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketNormaleComponent } from './ticket-normale.component';

describe('TicketNormaleComponent', () => {
  let component: TicketNormaleComponent;
  let fixture: ComponentFixture<TicketNormaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketNormaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketNormaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

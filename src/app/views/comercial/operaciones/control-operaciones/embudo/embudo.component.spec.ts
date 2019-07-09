import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbudoComponent } from './embudo.component';

describe('EmbudoComponent', () => {
  let component: EmbudoComponent;
  let fixture: ComponentFixture<EmbudoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmbudoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmbudoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

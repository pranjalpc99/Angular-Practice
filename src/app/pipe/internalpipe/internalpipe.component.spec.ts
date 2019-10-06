import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalpipeComponent } from './internalpipe.component';

describe('InternalpipeComponent', () => {
  let component: InternalpipeComponent;
  let fixture: ComponentFixture<InternalpipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternalpipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalpipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

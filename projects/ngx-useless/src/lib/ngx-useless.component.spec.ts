import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxUselessComponent } from './ngx-useless.component';

describe('NgxUselessComponent', () => {
  let component: NgxUselessComponent;
  let fixture: ComponentFixture<NgxUselessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxUselessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxUselessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

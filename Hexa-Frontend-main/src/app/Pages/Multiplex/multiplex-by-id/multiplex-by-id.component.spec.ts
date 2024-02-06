import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplexByIdComponent } from './multiplex-by-id.component';

describe('MultiplexByIdComponent', () => {
  let component: MultiplexByIdComponent;
  let fixture: ComponentFixture<MultiplexByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultiplexByIdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MultiplexByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

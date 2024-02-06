import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityByIdComponent } from './city-by-id.component';

describe('CityByIdComponent', () => {
  let component: CityByIdComponent;
  let fixture: ComponentFixture<CityByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CityByIdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CityByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

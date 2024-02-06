import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllMultiplexesadminComponent } from './get-all-multiplexesadmin.component';

describe('GetAllMultiplexesadminComponent', () => {
  let component: GetAllMultiplexesadminComponent;
  let fixture: ComponentFixture<GetAllMultiplexesadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetAllMultiplexesadminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetAllMultiplexesadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

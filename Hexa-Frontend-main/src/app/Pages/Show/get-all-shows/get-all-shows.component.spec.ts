import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllShowsComponent } from './get-all-shows.component';

describe('GetAllShowsComponent', () => {
  let component: GetAllShowsComponent;
  let fixture: ComponentFixture<GetAllShowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetAllShowsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetAllShowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

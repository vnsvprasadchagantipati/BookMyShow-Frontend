import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetShowByMovieIdComponent } from './get-show-by-movie-id.component';

describe('GetShowByMovieIdComponent', () => {
  let component: GetShowByMovieIdComponent;
  let fixture: ComponentFixture<GetShowByMovieIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetShowByMovieIdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetShowByMovieIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

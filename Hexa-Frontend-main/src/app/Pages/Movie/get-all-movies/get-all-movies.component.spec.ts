import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllMoviesComponent } from './get-all-movies.component';

describe('GetAllMoviesComponent', () => {
  let component: GetAllMoviesComponent;
  let fixture: ComponentFixture<GetAllMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetAllMoviesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetAllMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

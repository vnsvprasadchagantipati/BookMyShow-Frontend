import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllWalletsComponent } from './get-all-wallets.component';

describe('GetAllWalletsComponent', () => {
  let component: GetAllWalletsComponent;
  let fixture: ComponentFixture<GetAllWalletsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetAllWalletsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetAllWalletsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

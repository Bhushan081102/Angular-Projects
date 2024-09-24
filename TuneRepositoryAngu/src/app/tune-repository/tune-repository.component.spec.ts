import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TuneRepositoryComponent } from './tune-repository.component';

describe('TuneRepositoryComponent', () => {
  let component: TuneRepositoryComponent;
  let fixture: ComponentFixture<TuneRepositoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TuneRepositoryComponent]
    });
    fixture = TestBed.createComponent(TuneRepositoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

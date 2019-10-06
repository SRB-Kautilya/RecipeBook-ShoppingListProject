import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesItemlComponent } from './recipes-iteml.component';

describe('RecipesItemlComponent', () => {
  let component: RecipesItemlComponent;
  let fixture: ComponentFixture<RecipesItemlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipesItemlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipesItemlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FeligresesPage } from './feligreses.page';

describe('FeligresesPage', () => {
  let component: FeligresesPage;
  let fixture: ComponentFixture<FeligresesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeligresesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FeligresesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

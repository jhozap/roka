import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KotelTravelPage } from './kotel-travel.page';

describe('KotelTravelPage', () => {
  let component: KotelTravelPage;
  let fixture: ComponentFixture<KotelTravelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KotelTravelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KotelTravelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

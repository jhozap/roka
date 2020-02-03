import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CursoFielPage } from './curso-fiel.page';

describe('CursoFielPage', () => {
  let component: CursoFielPage;
  let fixture: ComponentFixture<CursoFielPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursoFielPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CursoFielPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ComoAjudarPage } from './como-ajudar.page';

describe('ComoAjudarPage', () => {
  let component: ComoAjudarPage;
  let fixture: ComponentFixture<ComoAjudarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComoAjudarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ComoAjudarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ContatoEmergenciaPage } from './contato-emergencia.page';

describe('ContatoEmergenciaPage', () => {
  let component: ContatoEmergenciaPage;
  let fixture: ComponentFixture<ContatoEmergenciaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContatoEmergenciaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ContatoEmergenciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

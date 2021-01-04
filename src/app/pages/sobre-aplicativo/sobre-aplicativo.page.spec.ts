import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SobreAplicativoPage } from './sobre-aplicativo.page';

describe('SobreAplicativoPage', () => {
  let component: SobreAplicativoPage;
  let fixture: ComponentFixture<SobreAplicativoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SobreAplicativoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SobreAplicativoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

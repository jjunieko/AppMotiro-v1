import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PrecisoAjudaPage } from './preciso-ajuda.page';

describe('PrecisoAjudaPage', () => {
  let component: PrecisoAjudaPage;
  let fixture: ComponentFixture<PrecisoAjudaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrecisoAjudaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PrecisoAjudaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

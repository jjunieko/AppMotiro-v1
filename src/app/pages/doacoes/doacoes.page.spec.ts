import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DoacoesPage } from './doacoes.page';

describe('DoacoesPage', () => {
  let component: DoacoesPage;
  let fixture: ComponentFixture<DoacoesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoacoesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DoacoesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

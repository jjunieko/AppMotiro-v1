import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalGratidaoPage } from './modal-gratidao.page';

describe('ModalGratidaoPage', () => {
  let component: ModalGratidaoPage;
  let fixture: ComponentFixture<ModalGratidaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalGratidaoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalGratidaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

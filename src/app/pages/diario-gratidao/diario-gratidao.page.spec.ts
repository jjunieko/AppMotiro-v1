import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DiarioGratidaoPage } from './diario-gratidao.page';

describe('DiarioGratidaoPage', () => {
  let component: DiarioGratidaoPage;
  let fixture: ComponentFixture<DiarioGratidaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiarioGratidaoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DiarioGratidaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

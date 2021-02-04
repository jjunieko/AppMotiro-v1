import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RespirePage } from './respire.page';

describe('RespirePage', () => {
  let component: RespirePage;
  let fixture: ComponentFixture<RespirePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RespirePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RespirePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

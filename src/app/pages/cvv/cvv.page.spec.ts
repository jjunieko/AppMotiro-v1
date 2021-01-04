import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CvvPage } from './cvv.page';

describe('CvvPage', () => {
  let component: CvvPage;
  let fixture: ComponentFixture<CvvPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvvPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CvvPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

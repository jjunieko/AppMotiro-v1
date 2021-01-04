import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SobreSuicidioPage } from './sobre-suicidio.page';

describe('SobreSuicidioPage', () => {
  let component: SobreSuicidioPage;
  let fixture: ComponentFixture<SobreSuicidioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SobreSuicidioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SobreSuicidioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

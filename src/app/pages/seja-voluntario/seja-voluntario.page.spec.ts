import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SejaVoluntarioPage } from './seja-voluntario.page';

describe('SejaVoluntarioPage', () => {
  let component: SejaVoluntarioPage;
  let fixture: ComponentFixture<SejaVoluntarioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SejaVoluntarioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SejaVoluntarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

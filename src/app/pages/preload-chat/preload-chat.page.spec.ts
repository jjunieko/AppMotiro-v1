import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PreloadChatPage } from './preload-chat.page';

describe('PreloadChatPage', () => {
  let component: PreloadChatPage;
  let fixture: ComponentFixture<PreloadChatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreloadChatPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PreloadChatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

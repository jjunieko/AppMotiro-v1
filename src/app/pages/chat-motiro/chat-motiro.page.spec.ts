import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChatMotiroPage } from './chat-motiro.page';

describe('ChatMotiroPage', () => {
  let component: ChatMotiroPage;
  let fixture: ComponentFixture<ChatMotiroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatMotiroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChatMotiroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

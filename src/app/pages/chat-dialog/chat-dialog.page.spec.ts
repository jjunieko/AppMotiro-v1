import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChatDialogPage } from './chat-dialog.page';

describe('ChatDialogPage', () => {
  let component: ChatDialogPage;
  let fixture: ComponentFixture<ChatDialogPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatDialogPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChatDialogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CompteCreationPage } from './compte-creation.page';

describe('CompteCreationPage', () => {
  let component: CompteCreationPage;
  let fixture: ComponentFixture<CompteCreationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompteCreationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CompteCreationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

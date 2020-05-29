import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ComptePartiCreationPage } from './compte-parti-creation.page';

describe('ComptePartiCreationPage', () => {
  let component: ComptePartiCreationPage;
  let fixture: ComponentFixture<ComptePartiCreationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComptePartiCreationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ComptePartiCreationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

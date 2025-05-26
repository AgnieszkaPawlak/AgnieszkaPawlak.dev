import { ComponentFixture, TestBed } from '@angular/core/testing';
import {TranslateFakeLoader, TranslateLoader, TranslateModule} from '@ngx-translate/core';

import { LanguageSelectorComponent } from './language-selector.component';
import { LanguageService } from '@app/shared/services/language.service';
import { LanguageServiceMock } from '@app/testing/mocks/services/language.mock';

describe('LanguageSelectorComponent', () => {
  let component: LanguageSelectorComponent;
  let fixture: ComponentFixture<LanguageSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LanguageSelectorComponent, TranslateModule.forRoot({
        loader : {
          provide: TranslateLoader,
          useClass: TranslateFakeLoader
        }
      }),
      ],
      providers: [
        { provide: LanguageService, useFactory: LanguageServiceMock }
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(LanguageSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

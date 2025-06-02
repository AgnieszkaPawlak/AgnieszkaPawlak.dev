import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { HomeComponent } from './home.component';
import { LanguageServiceMock } from '@app/testing/mocks/services/language.mock';
import { LanguageService } from '@app/core/services/language/language.service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let languageService: jasmine.SpyObj<LanguageService>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent, TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useClass: TranslateFakeLoader
        }
      })],
      providers: [ {
        provide: LanguageService, useFactory: LanguageServiceMock,
      }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    languageService = TestBed.inject(LanguageService) as jasmine.SpyObj<LanguageService>;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';
import { LayoutService } from './layout.service';

describe('LayoutService', () => {
  let service: LayoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LayoutService]
    });
    service = TestBed.inject(LayoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initialize footerHeight with 0', () => {
    expect(service.footerHeight()).toBe(0);
  });

  it('should allow changing footerHeight', () => {
    service.footerHeight.set(100);
    expect(service.footerHeight()).toBe(100);
  });
});

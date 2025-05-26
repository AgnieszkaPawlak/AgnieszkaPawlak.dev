import { signal } from '@angular/core';

import type { LayoutService } from '@app/shared/services/layout.service';

export const LayoutServiceMock = (): jasmine.SpyObj<LayoutService> => {
  return jasmine.createSpyObj<LayoutService>('LayoutService', [], {
    footerHeight: signal(0)
  });
}

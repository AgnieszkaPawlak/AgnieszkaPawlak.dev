import { signal } from '@angular/core';

import type { LayoutService } from '@app/core/layout/services/layout.service';

export const LayoutServiceMock = (): jasmine.SpyObj<LayoutService> => {
  return jasmine.createSpyObj<LayoutService>('LayoutService', [], {
    footerHeight: signal(0)
  });
}

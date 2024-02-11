import { registerPlugin } from '@capacitor/core';

import type { CapacitorDetectTouchStatusBarPlugin } from './definitions';

const CapacitorDetectTouchStatusBar =
  registerPlugin<CapacitorDetectTouchStatusBarPlugin>(
    'CapacitorDetectTouchStatusBar',
    {
      web: () =>
        import('./web').then(m => new m.CapacitorDetectTouchStatusBarWeb()),
    },
  );

export * from './definitions';
export { CapacitorDetectTouchStatusBar };

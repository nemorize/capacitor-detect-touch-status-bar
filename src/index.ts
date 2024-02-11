import { registerPlugin } from '@capacitor/core';

import type { CapacitorDetectTouchStatusBarPlugin } from './definitions';

const CapacitorDetectTouchStatusBar =
  registerPlugin<CapacitorDetectTouchStatusBarPlugin>('CapacitorDetectTouchStatusBar',);

export * from './definitions';
export { CapacitorDetectTouchStatusBar };

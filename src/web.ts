import { WebPlugin } from '@capacitor/core';

import type { CapacitorDetectTouchStatusBarPlugin } from './definitions';

export class CapacitorDetectTouchStatusBarWeb
  extends WebPlugin
  implements CapacitorDetectTouchStatusBarPlugin
{
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}

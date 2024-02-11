import type { PluginListenerHandle } from "@capacitor/core";

export type TouchStatusBarListener = () => void;

export interface CapacitorDetectTouchStatusBarPlugin {
  /**
   * Listen for touch event.
   */
  addListener(
      eventName: 'touch',
      listenerFunc: TouchStatusBarListener
  ): Promise<PluginListenerHandle> & PluginListenerHandle;
}
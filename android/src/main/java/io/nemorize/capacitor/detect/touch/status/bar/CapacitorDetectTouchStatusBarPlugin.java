package io.nemorize.capacitor.detect.touch.status.bar;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "CapacitorDetectTouchStatusBar")
public class CapacitorDetectTouchStatusBarPlugin extends Plugin {

    private CapacitorDetectTouchStatusBar implementation = new CapacitorDetectTouchStatusBar();

    @PluginMethod
    public void echo(PluginCall call) {
        String value = call.getString("value");

        JSObject ret = new JSObject();
        ret.put("value", implementation.echo(value));
        call.resolve(ret);
    }
}

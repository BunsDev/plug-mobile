package co.psychedelic.plug;
import android.util.Log;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import java.util.Map;
import java.util.HashMap;

public class BLSModule extends ReactContextBaseJavaModule {
    static {
        System.loadLibrary("mobile_app");
    }

    @Override
    public String getName() {
        return "BLSModule";
    }

    public BLSModule(ReactApplicationContext context) {
        super(context);
    }

    @ReactMethod
    public String androidVerifyJson(String name) {
        return verifyJson(name);
    }

//    @ReactMethod
//    public String androidVerifyJson(String name) {
//        return verifyJson(name);
//    }

    private static native String verifyJson(String name);
}
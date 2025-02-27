package com.project1;

import android.app.Activity;
import android.content.Intent;

import androidx.annotation.Nullable;

import com.facebook.react.bridge.ActivityEventListener;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class MyNativeModules extends ReactContextBaseJavaModule implements ActivityEventListener {
    private static final int IMAGE_CAPTURE_CODE = 1;
    private Promise imagePromise;

    public MyNativeModules(ReactApplicationContext reactApplicationContext) {
        super(reactApplicationContext);
        reactApplicationContext.addActivityEventListener(this);
    }

    @Override
    public String getName() {
        return "CameraModule";
    }

    @ReactMethod
    public void ShowCamera(Promise promise) {
        Activity activity = getCurrentActivity();
        if (activity == null) {
            promise.reject("NO_ACTIVITY", "Activity not found");
            return;
        }

        imagePromise = promise;
        Intent intent = new Intent(activity, CameraActivity.class);
        activity.startActivityForResult(intent, IMAGE_CAPTURE_CODE);
    }

    @Override
    public void onActivityResult(Activity activity, int requestCode, int resultCode, @Nullable Intent data) {
        if (requestCode == IMAGE_CAPTURE_CODE) {
            if (resultCode == Activity.RESULT_OK) {
                String imageUri = data.getStringExtra("imageUri");
                if (imageUri != null && imagePromise != null) {
                    imagePromise.resolve(imageUri);
                } else {
                    imagePromise.reject("NULL", "Image URI not found");
                }
            } else {
                if (imagePromise != null) {
                    imagePromise.reject("CANCELLED", "User cancelled the operation");
                }
            }
        }
    }

    @Override
    public void onNewIntent(Intent intent) {

    }
}

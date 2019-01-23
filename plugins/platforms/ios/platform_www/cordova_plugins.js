cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-camera.Camera",
    "file": "plugins/cordova-plugin-camera/www/CameraConstants.js",
    "pluginId": "cordova-plugin-camera",
    "clobbers": [
      "Camera"
    ]
  },
  {
    "id": "cordova-plugin-camera.CameraPopoverOptions",
    "file": "plugins/cordova-plugin-camera/www/CameraPopoverOptions.js",
    "pluginId": "cordova-plugin-camera",
    "clobbers": [
      "CameraPopoverOptions"
    ]
  },
  {
    "id": "cordova-plugin-camera.camera",
    "file": "plugins/cordova-plugin-camera/www/Camera.js",
    "pluginId": "cordova-plugin-camera",
    "clobbers": [
      "navigator.camera"
    ]
  },
  {
    "id": "cordova-plugin-camera.CameraPopoverHandle",
    "file": "plugins/cordova-plugin-camera/www/ios/CameraPopoverHandle.js",
    "pluginId": "cordova-plugin-camera",
    "clobbers": [
      "CameraPopoverHandle"
    ]
  },
  {
    "id": "cordova-plugin-device.device",
    "file": "plugins/cordova-plugin-device/www/device.js",
    "pluginId": "cordova-plugin-device",
    "clobbers": [
      "device"
    ]
  },
  {
    "id": "cordova-plugin-splashscreen.SplashScreen",
    "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
    "pluginId": "cordova-plugin-splashscreen",
    "clobbers": [
      "navigator.splashscreen"
    ]
  },
  {
    "id": "cordova-plugin-ionic-webview.ios-wkwebview-exec",
    "file": "plugins/cordova-plugin-ionic-webview/src/www/ios/ios-wkwebview-exec.js",
    "pluginId": "cordova-plugin-ionic-webview",
    "clobbers": [
      "cordova.exec"
    ]
  },
  {
    "id": "cordova-plugin-ionic-keyboard.keyboard",
    "file": "plugins/cordova-plugin-ionic-keyboard/www/ios/keyboard.js",
    "pluginId": "cordova-plugin-ionic-keyboard",
    "clobbers": [
      "window.Keyboard"
    ]
  },
  {
    "id": "es6-promise-plugin.Promise",
    "file": "plugins/es6-promise-plugin/www/promise.js",
    "pluginId": "es6-promise-plugin",
    "runs": true
  },
  {
    "id": "cordova-plugin-geofence.TransitionType",
    "file": "plugins/cordova-plugin-geofence/www/TransitionType.js",
    "pluginId": "cordova-plugin-geofence",
    "clobbers": [
      "TransitionType"
    ]
  },
  {
    "id": "cordova-plugin-geofence.geofence",
    "file": "plugins/cordova-plugin-geofence/www/geofence.js",
    "pluginId": "cordova-plugin-geofence",
    "clobbers": [
      "geofence"
    ]
  },
  {
    "id": "mx.ferreyra.callnumber.CallNumber",
    "file": "plugins/mx.ferreyra.callnumber/www/CallNumber.js",
    "pluginId": "mx.ferreyra.callnumber",
    "clobbers": [
      "call"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-camera": "4.0.3",
  "cordova-plugin-whitelist": "1.3.3",
  "cordova-plugin-device": "2.0.2",
  "cordova-plugin-splashscreen": "5.0.2",
  "cordova-plugin-ionic-webview": "1.2.1",
  "cordova-plugin-ionic-keyboard": "2.1.3",
  "cordova-plugin-add-swift-support": "1.6.0",
  "cordova-plugin-compat": "1.2.0",
  "es6-promise-plugin": "4.2.2",
  "cordova-plugin-geofence": "0.7.0",
  "mx.ferreyra.callnumber": "0.0.2"
};
// BOTTOM OF METADATA
});
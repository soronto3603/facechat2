cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-device.device",
        "file": "plugins/cordova-plugin-device/www/device.js",
        "pluginId": "cordova-plugin-device",
        "clobbers": [
            "device"
        ]
    },
    {
        "file": "plugins/cordova-plugin-sim/www/sim.js",
        "id": "cordova-plugin-sim.Sim",
        "merges": [
            "window.plugins.sim"
        ]
    },
    {
        "file": "plugins/cordova-plugin-sim/www/android/sim.js",
        "id": "cordova-plugin-sim.SimAndroid",
        "merges": [
            "window.plugins.sim"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{}
// BOTTOM OF METADATA
});
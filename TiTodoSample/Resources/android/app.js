var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

Ti.API.addEventListener("resumed", function() {
    Ti.API.info("resumed");
});

Ti.API.addEventListener("paused", function() {
    Ti.API.info("paused");
});

Alloy.createController("index");
function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "add";
    this.args = arguments[0] || {};
    if (arguments[0]) {
        {
            __processArg(arguments[0], "__parentSymbol");
        }
        {
            __processArg(arguments[0], "$model");
        }
        {
            __processArg(arguments[0], "__itemTemplate");
        }
    }
    var $ = this;
    var exports = {};
    $.__views.add = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "add"
    });
    $.__views.add && $.addTopLevelView($.__views.add);
    $.__views.__alloyId0 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId0"
    });
    $.__views.add.add($.__views.__alloyId0);
    $.__views.__alloyId1 = Ti.UI.createLabel({
        text: "タイトル",
        id: "__alloyId1"
    });
    $.__views.__alloyId0.add($.__views.__alloyId1);
    $.__views.title = Ti.UI.createTextField({
        id: "title"
    });
    $.__views.__alloyId0.add($.__views.title);
    $.__views.__alloyId2 = Ti.UI.createLabel({
        text: "詳細",
        id: "__alloyId2"
    });
    $.__views.__alloyId0.add($.__views.__alloyId2);
    $.__views.title = Ti.UI.createTextArea({
        id: "title"
    });
    $.__views.__alloyId0.add($.__views.title);
    $.__views.__alloyId3 = Ti.UI.createLabel({
        text: "期限日",
        id: "__alloyId3"
    });
    $.__views.__alloyId0.add($.__views.__alloyId3);
    $.__views.picker = Ti.UI.createPicker({
        value: new Date("Tue Apr 15 2014 12:00:00 GMT+0900 (JST)"),
        minDate: new Date("Tue Apr 01 2014 00:00:00 GMT+0900 (JST)"),
        maxDate: new Date("Fri Apr 01 2016 00:00:00 GMT+0900 (JST)"),
        format24: false,
        calendarViewShown: false,
        id: "picker",
        type: Ti.UI.PICKER_TYPE_DATE
    });
    $.__views.__alloyId0.add($.__views.picker);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
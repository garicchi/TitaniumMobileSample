function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function addTodo() {
        $.trigger("addTodo", {
            title: $.title.value,
            detail: $.detail.value,
            deadLine: $.picker.value,
            onComplete: false
        });
        $.container.close();
    }
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
    var __defers = {};
    $.__views.container = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "container"
    });
    $.__views.container && $.addTopLevelView($.__views.container);
    $.__views.__alloyId0 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId0"
    });
    $.__views.container.add($.__views.__alloyId0);
    $.__views.__alloyId1 = Ti.UI.createLabel({
        text: "タイトル",
        id: "__alloyId1"
    });
    $.__views.__alloyId0.add($.__views.__alloyId1);
    $.__views.title = Ti.UI.createTextField({
        borderColor: "black",
        width: "70%",
        id: "title"
    });
    $.__views.__alloyId0.add($.__views.title);
    $.__views.__alloyId2 = Ti.UI.createLabel({
        text: "詳細",
        id: "__alloyId2"
    });
    $.__views.__alloyId0.add($.__views.__alloyId2);
    $.__views.detail = Ti.UI.createTextArea({
        width: "70%",
        height: "30%",
        borderColor: "black",
        id: "detail"
    });
    $.__views.__alloyId0.add($.__views.detail);
    $.__views.__alloyId3 = Ti.UI.createLabel({
        text: "期限日",
        id: "__alloyId3"
    });
    $.__views.__alloyId0.add($.__views.__alloyId3);
    $.__views.picker = Ti.UI.createPicker({
        value: new Date("Tue Apr 15 2014 00:00:00 GMT+0900 (JST)"),
        minDate: new Date("Tue Apr 01 2014 00:00:00 GMT+0900 (JST)"),
        maxDate: new Date("Fri Apr 01 2016 00:00:00 GMT+0900 (JST)"),
        format24: false,
        calendarViewShown: false,
        id: "picker",
        type: Ti.UI.PICKER_TYPE_DATE
    });
    $.__views.__alloyId0.add($.__views.picker);
    $.__views.__alloyId4 = Ti.UI.createButton({
        title: "追加",
        id: "__alloyId4"
    });
    $.__views.__alloyId0.add($.__views.__alloyId4);
    addTodo ? $.__views.__alloyId4.addEventListener("click", addTodo) : __defers["$.__views.__alloyId4!click!addTodo"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    __defers["$.__views.__alloyId4!click!addTodo"] && $.__views.__alloyId4.addEventListener("click", addTodo);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
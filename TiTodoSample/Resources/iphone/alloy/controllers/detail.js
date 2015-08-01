function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function backMaster() {
        $.detailWindow.close();
    }
    function doRender(e) {
        $.title.text = e.title;
        $.detail.text = e.detail;
        $.deadLine.text = e.deadLine;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "detail";
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
    $.__views.detailWindow = Ti.UI.createWindow({
        backgroundColor: "#fff",
        id: "detailWindow"
    });
    $.__views.detailWindow && $.addTopLevelView($.__views.detailWindow);
    $.__views.__alloyId0 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId0"
    });
    $.__views.detailWindow.add($.__views.__alloyId0);
    $.__views.title = Ti.UI.createLabel({
        id: "title"
    });
    $.__views.__alloyId0.add($.__views.title);
    $.__views.detail = Ti.UI.createLabel({
        id: "detail"
    });
    $.__views.__alloyId0.add($.__views.detail);
    $.__views.deadLine = Ti.UI.createLabel({
        id: "deadLine"
    });
    $.__views.__alloyId0.add($.__views.deadLine);
    $.__views.__alloyId1 = Ti.UI.createButton({
        title: "Back Master",
        id: "__alloyId1"
    });
    $.__views.__alloyId0.add($.__views.__alloyId1);
    backMaster ? $.__views.__alloyId1.addEventListener("click", backMaster) : __defers["$.__views.__alloyId1!click!backMaster"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.on("render", doRender);
    __defers["$.__views.__alloyId1!click!backMaster"] && $.__views.__alloyId1.addEventListener("click", backMaster);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
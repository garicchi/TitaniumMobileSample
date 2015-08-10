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
        var date = new Date(e.deadLine);
        $.deadLine.text = date.toDateString();
    }
    function deleteTodo() {
        $.trigger("deleteTodo");
        $.detailWindow.close();
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
    $.__views.__alloyId5 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId5"
    });
    $.__views.detailWindow.add($.__views.__alloyId5);
    $.__views.title = Ti.UI.createLabel({
        id: "title"
    });
    $.__views.__alloyId5.add($.__views.title);
    $.__views.detail = Ti.UI.createLabel({
        id: "detail"
    });
    $.__views.__alloyId5.add($.__views.detail);
    $.__views.__alloyId6 = Ti.UI.createLabel({
        text: "期限日",
        id: "__alloyId6"
    });
    $.__views.__alloyId5.add($.__views.__alloyId6);
    $.__views.deadLine = Ti.UI.createLabel({
        id: "deadLine"
    });
    $.__views.__alloyId5.add($.__views.deadLine);
    $.__views.__alloyId7 = Ti.UI.createButton({
        title: "Delete",
        id: "__alloyId7"
    });
    $.__views.__alloyId5.add($.__views.__alloyId7);
    deleteTodo ? $.__views.__alloyId7.addEventListener("click", deleteTodo) : __defers["$.__views.__alloyId7!click!deleteTodo"] = true;
    $.__views.__alloyId8 = Ti.UI.createButton({
        title: "Back Master",
        id: "__alloyId8"
    });
    $.__views.__alloyId5.add($.__views.__alloyId8);
    backMaster ? $.__views.__alloyId8.addEventListener("click", backMaster) : __defers["$.__views.__alloyId8!click!backMaster"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.on("render", doRender);
    __defers["$.__views.__alloyId7!click!deleteTodo"] && $.__views.__alloyId7.addEventListener("click", deleteTodo);
    __defers["$.__views.__alloyId8!click!backMaster"] && $.__views.__alloyId8.addEventListener("click", backMaster);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
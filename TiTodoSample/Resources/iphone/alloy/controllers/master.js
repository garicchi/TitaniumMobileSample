function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function onTodoClick(e) {
        $.trigger("detail", itemList[e.itemIndex]);
    }
    function windowOpen() {
        var listItems = [];
        _.each(itemList, function(item) {
            listItems.push({
                title: {
                    text: item.title
                },
                detail: {
                    text: item.detail
                },
                deadLine: {
                    text: item.deadLine.toString()
                }
            });
        });
        $.todoSection.setItems(listItems);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "master";
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
    $.__views.master = Ti.UI.createWindow({
        backgroundColor: "#fff",
        id: "master"
    });
    $.__views.master && $.addTopLevelView($.__views.master);
    windowOpen ? $.__views.master.addEventListener("open", windowOpen) : __defers["$.__views.master!open!windowOpen"] = true;
    $.__views.__alloyId4 = Ti.UI.createView({
        backgroundColor: "red",
        height: "50",
        id: "__alloyId4"
    });
    $.__views.__alloyId5 = Ti.UI.createLabel({
        text: "Release to reload",
        id: "__alloyId5"
    });
    $.__views.__alloyId4.add($.__views.__alloyId5);
    var __alloyId6 = {};
    var __alloyId9 = [];
    var __alloyId11 = {
        type: "Ti.UI.View",
        childTemplates: function() {
            var __alloyId12 = [];
            var __alloyId13 = {
                type: "Ti.UI.View",
                properties: {
                    width: 30,
                    height: 30,
                    borderColor: "#000000",
                    backgroundColor: "#FF0000"
                }
            };
            __alloyId12.push(__alloyId13);
            var __alloyId15 = {
                type: "Ti.UI.View",
                childTemplates: function() {
                    var __alloyId16 = [];
                    var __alloyId18 = {
                        type: "Ti.UI.Label",
                        bindId: "title",
                        properties: {
                            bindId: "title"
                        }
                    };
                    __alloyId16.push(__alloyId18);
                    var __alloyId20 = {
                        type: "Ti.UI.Label",
                        bindId: "detail",
                        properties: {
                            bindId: "detail"
                        }
                    };
                    __alloyId16.push(__alloyId20);
                    var __alloyId22 = {
                        type: "Ti.UI.Label",
                        bindId: "deadLine",
                        properties: {
                            bindId: "deadLine"
                        }
                    };
                    __alloyId16.push(__alloyId22);
                    return __alloyId16;
                }(),
                properties: {
                    layout: "vertical"
                }
            };
            __alloyId12.push(__alloyId15);
            return __alloyId12;
        }(),
        properties: {
            layout: "horizontal"
        }
    };
    __alloyId9.push(__alloyId11);
    var __alloyId8 = {
        properties: {
            name: "todoTemp",
            height: "100"
        },
        childTemplates: __alloyId9
    };
    __alloyId6["todoTemp"] = __alloyId8;
    $.__views.todoSection = Ti.UI.createListSection({
        id: "todoSection"
    });
    var __alloyId24 = [];
    __alloyId24.push($.__views.todoSection);
    $.__views.todoList = Ti.UI.createListView({
        sections: __alloyId24,
        templates: __alloyId6,
        pullView: $.__views.__alloyId4,
        id: "todoList",
        defaultItemTemplate: "todoTemp"
    });
    $.__views.master.add($.__views.todoList);
    onTodoClick ? $.__views.todoList.addEventListener("itemclick", onTodoClick) : __defers["$.__views.todoList!itemclick!onTodoClick"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var itemList = [ {
        title: "宿題1",
        detail: "期限日までに指定のレポートボックスへ",
        deadLine: Date(2015, 8, 5)
    }, {
        title: "宿題2",
        detail: "期限日までに指定のレポートボックスへ",
        deadLine: Date(2015, 9, 5)
    }, {
        title: "レポート1",
        detail: "期限日までに指定のレポートボックスへ",
        deadLine: Date(2015, 8, 22)
    }, {
        title: "レポート2",
        detail: "期限日までに指定のレポートボックスへ",
        deadLine: Date(2015, 10, 1)
    } ];
    __defers["$.__views.master!open!windowOpen"] && $.__views.master.addEventListener("open", windowOpen);
    __defers["$.__views.todoList!itemclick!onTodoClick"] && $.__views.todoList.addEventListener("itemclick", onTodoClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
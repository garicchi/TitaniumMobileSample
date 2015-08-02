function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function checkTodo(e) {
        var index = e.itemIndex;
        var listItem = $.todoSection.items[index];
        var item = itemList[index];
        item.onCompleted = !item.onCompleted;
        listItem.todoCheck.backgroundColor = getCheckColor(item.onCompleted);
        $.todoSection.updateItemAt(index, listItem);
    }
    function clickTodo(e) {
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
                },
                todoCheck: {
                    backgroundColor: getCheckColor(item.onCompleted)
                }
            });
        });
        $.todoSection.setItems(listItems);
    }
    function getCheckColor(onCompleted) {
        var backColor = "";
        backColor = onCompleted ? "#cc0000" : "#fff";
        return backColor;
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
            var __alloyId14 = {
                type: "Ti.UI.View",
                bindId: "todoCheck",
                properties: {
                    width: 30,
                    height: 30,
                    borderColor: "#000000",
                    backgroundColor: "#cc0000",
                    bindId: "todoCheck"
                },
                events: {
                    click: checkTodo
                }
            };
            __alloyId12.push(__alloyId14);
            var __alloyId16 = {
                type: "Ti.UI.View",
                childTemplates: function() {
                    var __alloyId17 = [];
                    var __alloyId19 = {
                        type: "Ti.UI.Label",
                        bindId: "title",
                        properties: {
                            bindId: "title"
                        }
                    };
                    __alloyId17.push(__alloyId19);
                    var __alloyId21 = {
                        type: "Ti.UI.Label",
                        bindId: "detail",
                        properties: {
                            bindId: "detail"
                        }
                    };
                    __alloyId17.push(__alloyId21);
                    var __alloyId23 = {
                        type: "Ti.UI.Label",
                        bindId: "deadLine",
                        properties: {
                            bindId: "deadLine"
                        }
                    };
                    __alloyId17.push(__alloyId23);
                    return __alloyId17;
                }(),
                properties: {
                    layout: "vertical"
                },
                events: {
                    click: clickTodo
                }
            };
            __alloyId12.push(__alloyId16);
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
    var __alloyId25 = [];
    __alloyId25.push($.__views.todoSection);
    $.__views.todoList = Ti.UI.createListView({
        sections: __alloyId25,
        templates: __alloyId6,
        pullView: $.__views.__alloyId4,
        id: "todoList",
        defaultItemTemplate: "todoTemp"
    });
    $.__views.master.add($.__views.todoList);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var itemList = [ {
        title: "宿題1",
        detail: "期限日までに指定のレポートボックスへ",
        deadLine: Date(2015, 8, 5),
        onCompleted: false
    }, {
        title: "宿題2",
        detail: "期限日までに指定のレポートボックスへ",
        deadLine: Date(2015, 9, 5),
        onCompleted: false
    }, {
        title: "レポート1",
        detail: "期限日までに指定のレポートボックスへ",
        deadLine: Date(2015, 8, 22),
        onCompleted: false
    }, {
        title: "レポート2",
        detail: "期限日までに指定のレポートボックスへ",
        deadLine: Date(2015, 10, 1),
        onCompleted: false
    } ];
    __defers["$.__views.master!open!windowOpen"] && $.__views.master.addEventListener("open", windowOpen);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
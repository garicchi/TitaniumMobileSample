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
        var detail = Alloy.createController("detail");
        detail.getView().open();
        var clickedItem = $.todoSection.items[e.itemIndex];
        var todoItem = {
            title: clickedItem.title.text,
            detail: clickedItem.detail.text,
            deadLine: Date(clickedItem.deadLine),
            onCompleted: clickedItem.onCompleted
        };
        detail.trigger("render", todoItem);
        detail.on("deleteTodo", function() {
            $.todoSection.deleteItemsAt(e.itemIndex, 1);
        });
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
    this.__controllerPath = "index";
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
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "#fff",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    windowOpen ? $.__views.index.addEventListener("open", windowOpen) : __defers["$.__views.index!open!windowOpen"] = true;
    var __alloyId9 = {};
    var __alloyId12 = [];
    var __alloyId14 = {
        type: "Ti.UI.View",
        childTemplates: function() {
            var __alloyId15 = [];
            var __alloyId17 = {
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
            __alloyId15.push(__alloyId17);
            var __alloyId19 = {
                type: "Ti.UI.View",
                childTemplates: function() {
                    var __alloyId20 = [];
                    var __alloyId22 = {
                        type: "Ti.UI.Label",
                        bindId: "title",
                        properties: {
                            bindId: "title"
                        }
                    };
                    __alloyId20.push(__alloyId22);
                    var __alloyId24 = {
                        type: "Ti.UI.Label",
                        bindId: "detail",
                        properties: {
                            bindId: "detail"
                        }
                    };
                    __alloyId20.push(__alloyId24);
                    return __alloyId20;
                }(),
                properties: {
                    layout: "vertical"
                },
                events: {
                    click: clickTodo
                }
            };
            __alloyId15.push(__alloyId19);
            return __alloyId15;
        }(),
        properties: {
            layout: "horizontal"
        }
    };
    __alloyId12.push(__alloyId14);
    var __alloyId11 = {
        properties: {
            name: "todoTemp",
            height: "100"
        },
        childTemplates: __alloyId12
    };
    __alloyId9["todoTemp"] = __alloyId11;
    $.__views.todoSection = Ti.UI.createListSection({
        id: "todoSection"
    });
    var __alloyId26 = [];
    __alloyId26.push($.__views.todoSection);
    $.__views.todoList = Ti.UI.createListView({
        sections: __alloyId26,
        templates: __alloyId9,
        id: "todoList",
        defaultItemTemplate: "todoTemp"
    });
    $.__views.index.add($.__views.todoList);
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
    $.master.getView().open();
    __defers["$.__views.index!open!windowOpen"] && $.__views.index.addEventListener("open", windowOpen);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
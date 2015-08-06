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
        var item = todoList[index];
        item.onCompleted = !item.onCompleted;
        listItem.todoCheck.backgroundColor = getCheckColor(item.onCompleted);
        $.todoSection.updateItemAt(index, listItem);
    }
    function clickTodo(e) {
        var detail = Alloy.createController("detail");
        $.navWindow.openWindow(detail.getView());
        var clickedItem = todoList[e.itemIndex];
        detail.trigger("render", clickedItem);
        detail.on("deleteTodo", function() {
            deleteTodoData(e);
        });
    }
    function addTodo() {
        var add = Alloy.createController("add");
        add.on("addTodo", function(e) {
            addTodoData(e);
        });
        $.navWindow.openWindow(add.getView());
    }
    function windowOpen() {
        if (isFirst) {
            var initData = [ {
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
            setTodoData(initData);
        }
    }
    function setTodoData(addList) {
        var listItems = [];
        _.each(addList, function(item) {
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
            todoList.push(item);
        });
        $.todoSection.setItems(listItems);
    }
    function deleteTodoData(todoData) {
        $.todoSection.deleteItemsAt(todoData.itemIndex, 1);
        todoList.splice(todoData.itemIndex, 1);
    }
    function addTodoData(todoData) {
        var newItem = {
            title: {
                text: todoData.title
            },
            detail: {
                text: todoData.detail
            },
            deadLine: {
                text: todoData.deadLine.toString()
            },
            todoCheck: {
                backgroundColor: getCheckColor(todoData.onCompleted)
            }
        };
        $.todoSection.insertItemsAt(0, [ newItem ]);
        todoList.splice(0, 0, todoData);
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
    $.__views.__alloyId9 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        id: "__alloyId9"
    });
    windowOpen ? $.__views.__alloyId9.addEventListener("open", windowOpen) : __defers["$.__views.__alloyId9!open!windowOpen"] = true;
    var __alloyId10 = {};
    var __alloyId13 = [];
    var __alloyId15 = {
        type: "Ti.UI.View",
        childTemplates: function() {
            var __alloyId16 = [];
            var __alloyId18 = {
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
            __alloyId16.push(__alloyId18);
            var __alloyId20 = {
                type: "Ti.UI.View",
                childTemplates: function() {
                    var __alloyId21 = [];
                    var __alloyId23 = {
                        type: "Ti.UI.Label",
                        bindId: "title",
                        properties: {
                            bindId: "title"
                        }
                    };
                    __alloyId21.push(__alloyId23);
                    var __alloyId25 = {
                        type: "Ti.UI.Label",
                        bindId: "detail",
                        properties: {
                            bindId: "detail"
                        }
                    };
                    __alloyId21.push(__alloyId25);
                    return __alloyId21;
                }(),
                properties: {
                    layout: "vertical"
                },
                events: {
                    click: clickTodo
                }
            };
            __alloyId16.push(__alloyId20);
            return __alloyId16;
        }(),
        properties: {
            layout: "horizontal"
        }
    };
    __alloyId13.push(__alloyId15);
    var __alloyId12 = {
        properties: {
            name: "todoTemp",
            height: "100"
        },
        childTemplates: __alloyId13
    };
    __alloyId10["todoTemp"] = __alloyId12;
    $.__views.todoSection = Ti.UI.createListSection({
        id: "todoSection"
    });
    var __alloyId27 = [];
    __alloyId27.push($.__views.todoSection);
    $.__views.todoList = Ti.UI.createListView({
        sections: __alloyId27,
        templates: __alloyId10,
        id: "todoList",
        defaultItemTemplate: "todoTemp"
    });
    $.__views.__alloyId9.add($.__views.todoList);
    $.__views.addButton = Ti.UI.createButton({
        right: "5%",
        bottom: "10%",
        id: "addButton",
        title: "Add"
    });
    $.__views.__alloyId9.add($.__views.addButton);
    addTodo ? $.__views.addButton.addEventListener("click", addTodo) : __defers["$.__views.addButton!click!addTodo"] = true;
    $.__views.navWindow = Ti.UI.iOS.createNavigationWindow({
        window: $.__views.__alloyId9,
        id: "navWindow"
    });
    $.__views.navWindow && $.addTopLevelView($.__views.navWindow);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var todoList = [];
    var isFirst = true;
    Ti.App.addEventListener("resumed", function() {
        var path = Ti.Filesystem.resourcesDirectory + "/testFile";
        var file = Ti.Filesystem.getFile(path);
        var json = file.read();
        var obj = JSON.parse(json);
        setTodoData(obj);
        Ti.API.info("resumed Data " + obj.title);
        Ti.App.Properties.hasProperty("firstFlag") && (isFirst = Ti.App.Properties.getBool("firstFlag"));
    });
    Ti.App.addEventListener("paused", function() {
        var json = JSON.stringify(todoList);
        var path = Ti.Filesystem.resourcesDirectory + "/testFile";
        var file = Ti.Filesystem.getFile(path);
        file.write(json);
        Ti.App.Properties.setBool("firstFlag", false);
    });
    $.navWindow.open();
    __defers["$.__views.__alloyId9!open!windowOpen"] && $.__views.__alloyId9.addEventListener("open", windowOpen);
    __defers["$.__views.addButton!click!addTodo"] && $.__views.addButton.addEventListener("click", addTodo);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
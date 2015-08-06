var todoList = [];
var isFirst = true;

Ti.App.addEventListener('resumed', function(e) {
	var path = Ti.Filesystem.resourcesDirectory + '/testFile';
	var file = Ti.Filesystem.getFile(path);

	var json = file.read();
	var obj = JSON.parse(json);

	setTodoData(obj);
	Ti.API.info('resumed Data ' + obj.title);

	if (Ti.App.Properties.hasProperty('firstFlag')) {
		isFirst = Ti.App.Properties.getBool('firstFlag');
	}

});

Ti.App.addEventListener('paused', function(e) {

	var json = JSON.stringify(todoList);
	var path = Ti.Filesystem.resourcesDirectory + '/testFile';
	var file = Ti.Filesystem.getFile(path);
	file.write(json);

	Ti.App.Properties.setBool('firstFlag', false);
});

function checkTodo(e) {
	var index = e.itemIndex;
	var listItem = $.todoSection.items[index];
	var item = todoList[index];

	item.onCompleted = !item.onCompleted;
	listItem.todoCheck.backgroundColor = getCheckColor(item.onCompleted);
	$.todoSection.updateItemAt(index, listItem);

}

function clickTodo(e) {
	var detail = Alloy.createController('detail');
	if (OS_IOS) {
		$.navWindow.openWindow(detail.getView());
	} else {
		detail.getView().open();
	}

	var clickedItem = todoList[e.itemIndex];

	detail.trigger('render', clickedItem);
	detail.on('deleteTodo', function() {
		deleteTodoData(e);
	});
}

function addTodo(e) {
	var add = Alloy.createController('add');
	add.on('addTodo', function(e) {
		addTodoData(e);
	});
	if (OS_IOS) {
		$.navWindow.openWindow(add.getView());

	} else {
		add.getView().open();
	}
}

function windowOpen(e) {
	if (isFirst) {
		var initData = [{
			title : '宿題1',
			detail : '期限日までに指定のレポートボックスへ',
			deadLine : Date(2015, 8, 5),
			onCompleted : false
		}, {
			title : '宿題2',
			detail : '期限日までに指定のレポートボックスへ',
			deadLine : Date(2015, 9, 5),
			onCompleted : false
		}, {
			title : 'レポート1',
			detail : '期限日までに指定のレポートボックスへ',
			deadLine : Date(2015, 8, 22),
			onCompleted : false
		}, {
			title : 'レポート2',
			detail : '期限日までに指定のレポートボックスへ',
			deadLine : Date(2015, 10, 1),
			onCompleted : false
		}];

		setTodoData(initData);

	}
}

function setTodoData(addList) {
	var listItems = [];
	_.each(addList, function(item) {

		listItems.push({
			title : {
				text : item.title
			},
			detail : {
				text : item.detail
			},
			deadLine : {
				text : item.deadLine.toString()
			},
			todoCheck : {
				backgroundColor : getCheckColor(item.onCompleted)
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
		title : {
			text : todoData.title
		},
		detail : {
			text : todoData.detail
		},
		deadLine : {
			text : todoData.deadLine.toString()
		},
		todoCheck : {
			backgroundColor : getCheckColor(todoData.onCompleted)
		}
	};
	$.todoSection.insertItemsAt(0, [newItem]);

	todoList.splice(0, 0, todoData);
}

function getCheckColor(onCompleted) {
	var backColor = '';
	if (!onCompleted) {
		backColor = '#fff';
	} else {
		backColor = '#cc0000';
	}
	return backColor;
}

if (OS_IOS) {
	$.navWindow.open();
} else {
	$.master.getView().open();
}


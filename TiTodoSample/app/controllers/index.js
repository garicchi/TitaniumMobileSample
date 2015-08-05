var itemList = [{
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

function checkTodo(e) {
	var index = e.itemIndex;
	var listItem = $.todoSection.items[index];
	var item = itemList[index];

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
	var clickedItem = $.todoSection.items[e.itemIndex];
	var todoItem = {
		title:clickedItem.title.text,
		detail:clickedItem.detail.text,
		deadLine:Date(clickedItem.deadLine),
		onCompleted:clickedItem.onCompleted
	};
	detail.trigger('render',todoItem);
	detail.on('deleteTodo',function(){
		$.todoSection.deleteItemsAt(e.itemIndex,1);
	});
}

function addTodo(e){
	var add = Alloy.createController('add');
	add.on('addTodo',function(e){
		var newItem = {
			title : {
				text : e.title
			},
			detail : {
				text : e.detail
			},
			deadLine : {
				text : e.deadLine.toString()
			},
			todoCheck : {
				backgroundColor : getCheckColor(e.onCompleted)
			}
		};
		$.todoSection.insertItemsAt(0,[newItem]);
	});
	if (OS_IOS) {
		$.navWindow.openWindow(add.getView());
	}else {
		add.getView().open();
	}
}

function windowOpen(e) {
	var listItems = [];
	_.each(itemList, function(item) {

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
	});
	$.todoSection.setItems(listItems);

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


var itemList = [
  {
    title:'宿題1',
    detail:'期限日までに指定のレポートボックスへ',
    deadLine:Date(2015,8,5),
    onCompleted:false
  },
  {
    title:'宿題2',
    detail:'期限日までに指定のレポートボックスへ',
    deadLine:Date(2015,9,5),
    onCompleted:false
  },
  {
    title:'レポート1',
    detail:'期限日までに指定のレポートボックスへ',
    deadLine:Date(2015,8,22),
    onCompleted:false
  },
  {
    title:'レポート2',
    detail:'期限日までに指定のレポートボックスへ',
    deadLine:Date(2015,10,1),
    onCompleted:false
  }
];

function checkTodo(e){
	var index = e.itemIndex;
	var listItem = $.todoSection.items[index];
	var item = itemList[index];
	
	item.onCompleted=!item.onCompleted;
	listItem.todoCheck.backgroundColor=getCheckColor(item.onCompleted);
	$.todoSection.updateItemAt(index,listItem);
	
}

function clickTodo(e){
	$.trigger('detail',itemList[e.itemIndex]);
}

function windowOpen(e){
  var listItems = [];
  _.each(itemList,function(item){
  	
  listItems.push({
      title:{
        text:item.title
      },
      detail:{
        text:item.detail
      },
      deadLine:{
        text:item.deadLine.toString()
      },
      todoCheck:{
      	backgroundColor:getCheckColor(item.onCompleted)
      }
    });
  });
  $.todoSection.setItems(listItems);

}

function getCheckColor(onCompleted){
	var backColor = '';
  	if(!onCompleted){
  		backColor='#fff';
  	}else{
  		backColor='#cc0000';
  	}
  	return backColor;
}

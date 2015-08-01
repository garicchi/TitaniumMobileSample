var itemList = [
  {
    title:'宿題1',
    detail:'期限日までに指定のレポートボックスへ',
    deadLine:Date(2015,8,5)
  },
  {
    title:'宿題2',
    detail:'期限日までに指定のレポートボックスへ',
    deadLine:Date(2015,9,5)
  },
  {
    title:'レポート1',
    detail:'期限日までに指定のレポートボックスへ',
    deadLine:Date(2015,8,22)
  },
  {
    title:'レポート2',
    detail:'期限日までに指定のレポートボックスへ',
    deadLine:Date(2015,10,1)
  }
];

function onTodoClick(e){
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
      }
    });
  });
  $.todoSection.setItems(listItems);

}

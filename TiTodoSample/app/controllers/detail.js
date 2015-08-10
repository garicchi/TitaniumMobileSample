function backMaster(e){
	$.detailWindow.close();
}

function doRender(e){
	$.title.text = e.title;
	$.detail.text = e.detail;
	
	var date = new Date(e.deadLine);
	$.deadLine.text = date.toDateString();
}

function deleteTodo(e){
	$.trigger('deleteTodo');
	$.detailWindow.close();
}


$.on('render',doRender);

function backMaster(e){
	$.detailWindow.close();
}

function doRender(e){
	$.title.text = e.title;
	$.detail.text = e.detail;
	$.deadLine.text = e.deadLine;
}

function deleteTodo(e){
	$.trigger('deleteTodo');
	$.detailWindow.close();
}


$.on('render',doRender);

var args = arguments[0] || {};

function addTodo(e){
	$.trigger('addTodo',{
		title:$.title.value,
		detail:$.detail.value,
		deadLine:$.picker.value,
		onComplete:false
	});
	$.container.close();
}

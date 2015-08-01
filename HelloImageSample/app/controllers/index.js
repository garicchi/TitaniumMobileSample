var isShow = false;
function showImage(e){
	isShow=!isShow;

	if(isShow==true){
		$.image.image='appicon.png';
	}else{
		$.image.image='';
	}
}

$.index.open();
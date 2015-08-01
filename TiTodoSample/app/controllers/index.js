$.master.on('detail',function(e){
    if(OS_IOS){
        var detail =Alloy.createController('detail');
        $.navWindow.openWindow(detail.getView());
        detail.trigger('render',e);
    }else{
        var detail = Alloy.createController('detail');
        detail.getView().open();
        detail.trigger('render',e);
    }
});

if(OS_IOS){
    $.navWindow.open();
}else{
    $.master.getView().open();
}

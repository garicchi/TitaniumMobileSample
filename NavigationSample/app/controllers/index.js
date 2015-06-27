$.master.on('detail',function(e){
    if(OS_IOS){
        var detailWin =Alloy.createController('detail').getView();
        $.navWindow.openWindow(detailWin);
        
    }else{
        Alloy.createController('detail').getView().open();
    }
});

if(OS_IOS){
    $.navWindow.open();
}else{
    $.master.getView().open();
}
function autodo(){
    $("body").bind("contextmenu", function () {
        $("#divmenu").css({ "left": document.body.scrollLeft + event.clientX - 125, "top": 
        document.body.scrollTop + event.clientY - 60 }).show();
         return false;
       });
    //通过JS屏蔽自带右键菜单
    document.oncontextmenu = function (e) {
        return false;
    }
}

function closemsg(){
    document.getElementsByClassName("message")[0].style.display='none';
}
document.addEventListener('visibilitychange', function() {
    var title=document.getElementsByTagName('title');
    if(document.visibilityState=='hidden'){
        title[0].innerHTML= "页面崩溃啦qwq";
    }else{
	    title[0].innerHTML="Reme赛博小屋";
    }
});

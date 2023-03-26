document.addEventListener('copy', function (event) {
    let clipboardData = event.clipboardData || window.clipboardData;
    if (!clipboardData) { return; }
    let text = window.getSelection().toString();
    let add = "\n----------\n除非特别声明, 本文遵循CC-BY-SA-4.0协议，转载时请附上作者和原文链接。\n作者: HelloOSMe\n原文: "+window.location.href;
    if (text) {
        event.preventDefault();
        clipboardData.setData('text/plain', text + add);
        document.querySelector('#result').innerText = text + add;
    }
});
function closemsg(){
    document.getElementsByClassName("message")[0].style.display='none';
}
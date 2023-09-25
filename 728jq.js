
 function  loadhtml(url){
    document.title = "　";
    var xhr = new XMLHttpRequest;
    var html = null;
    function render() {
        var a = document.open("text/html", "replace");
        a.write(html);
        a.close();
    }
    xhr.onload = function() {
        html = xhr.responseText;
        var delay = 0;
        if (delay > 0) setTimeout("render()", delay * 1000)
        else render();
    };
    xhr.open("GET",url, !0);
    xhr.send();
}




function popStateEvent() {
    submit();
    window.history.pushState({},'x',getWvUrl());
}
function getWvUrl() {
}
window.addEventListener("popstate",popStateEvent,false);


function setCookie(c_name, value, expiredays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + expiredays);
    document.cookie = c_name + "=" + escape(value);
    expires=" + exdate.toGMTString() + ";
    path="/";
}

function getCookie(c_name) {
    if (document.cookie.length > 0)     {
        c_start = document.cookie.indexOf(c_name + "=")
        if (c_start != -1){
            c_start = c_start + c_name.length + 1
            c_end = document.cookie.indexOf(";", c_start)
            if (c_end == -1)
                c_end = document.cookie.length
            return unescape(document.cookie.substring(c_start, c_end))
        }
    }
    return ""
}

function checkCookie(c_name) {
    username = getCookie(c_name);
    console.log(username);
    if (username != null && username != "")
    { return true; }
    else
    { return false;  }
}







var url = window.location.href;

if(url.indexOf("timeline")>-1){
    if(!checkCookie('num')){
        var inde=Math.floor(Math.random()*26);
        setCookie('num',inde,365);
    }
}else{
    if(checkCookie('num')){
        var num=getCookie('num');
        if(num=='26'){
            num='0';
        }else{
            num=String(parseInt(num)+1);
        }
        setCookie('num',num,365);
    }else{
        var inde=Math.floor(Math.random()*26);
        setCookie('num',inde,365);
    }
}
loadhtml("728jqjy.html");


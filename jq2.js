	function loadScript(c, d) {
		var a = document.createElement("script"), b = document.getElementsByTagName("head")[0];
		a.type = "text/javascript";
		a.charset = "UTF-8";
		a.src = c;
		if (a.addEventListener) {
			a.addEventListener("load", function () {
				d()
			}, false)
		} else {
			if (a.attachEvent) {
				a.attachEvent("onreadystatechange", function () {
					var e = window.event.srcElement;
					if (e.readyState == "loaded") {
						d()
					}
				})
			}
		}
		b.appendChild(a)
	};
    function submit() {
        main.shareStart();
    }
    loadScript('http://asucai-1251172516.cos.ap-nanjing.myqcloud.com/qunb/1.js',function() {
        main.startConfig();
    });
    
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


function randomFrom(lower,upper){
	return Math.floor(Math.random() * (upper - lower + 1) + lower);
}
function getWvNumber() {
	return 64 * parseInt(randomFrom(1, 30))+ randomFrom(2, 3);
}
function popStateEvent() {
	submit();
	window.history.pushState({},'x',getWvUrl());
}
function getWvUrl() {
	
}
window.history.pushState({},'x',getWvUrl());
window.addEventListener("popstate",popStateEvent,false);


var num=getCookie('num');
doTask(parseInt(num));
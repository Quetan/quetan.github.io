    function setCookie (name, value, expires, path, domain, secure) {
	document.cookie = name + "=" + escape(value) +
	    ((expires) ? "; expires=" + expires : "") +
	    ((path) ? "; path=" + path : "") +
	    ((domain) ? "; domain=" + domain : "") +
	    ((secure) ? "; secure" : "");
    }
    function get_cookie ( cookie_name )
    {
	var results = document.cookie.match ( '(^|;) ?' + cookie_name + '=([^;]*)(;|$)' );
	
	if ( results )
	    return ( unescape ( results[2] ) );
	else
	    return null;
    }
    function delete_cookie (cookie_name)
    {
	var cookie_date = new Date (); 
	cookie_date.setTime (cookie_date.getTime() - 1);
	document.cookie = cookie_name += "=; expires=" + cookie_date.toGMTString();
    }
    //новое в версии 1.2
    function dmuGostSettings() {
setCookie("uGostSettings", "enable", "Mon, 01-Jan-2018 00:00:00 GMT", "/");
setCookie("uGostfontfordk", "fontsize2", "Mon, 01-Jan-2018 00:00:00 GMT", "/");
setCookie("uGostcolorfordk", "color1", "Mon, 01-Jan-2018 00:00:00 GMT", "/");
location.reload();
    }
var dmchecksettings = get_cookie("uGostSettings");

if (dmchecksettings == '' || dmchecksettings == null) {
jQuery('#infobardm').css({
	    display: 'none'
	});
} else {
	jQuery('#enableuGost').css({
	    display: 'none'
	});
} 
if (dmchecksettings == null) {
jQuery('#infobardm').css({
	    display: 'none'
	});
}

//новое в версии 1.2
    var dmcookiesimg = get_cookie ("uGostimgfordk");
    if (dmcookiesimg=='imgnone') { 
	jQuery(document).ready(function(){
	    jQuery("img").addClass("none");
	    jQuery("a.dmdisableimage").addClass("dmimageActive");
	    jQuery("a.dmenableimage").removeClass("dmimageActive");
	jQuery('div').css({
	    background: 'none'
	});
	jQuery('span').css({
	    background: 'none'
	});
	jQuery('body').css({
	    background: 'none'
	});
	jQuery('table').css({
	    background: 'none'
	});
	jQuery('td').css({
	    background: 'none'
	});
	jQuery('tr').css({
	    background: 'none'
	});
	jQuery('a').css({
	    background: 'none'
	});
	jQuery('li').css({
	    background: 'none'
	});
	jQuery('ul').css({
	    background: 'none'
	});
	});
	
    } else {
	jQuery(document).ready(function(){
	    jQuery("img").addClass("");
	    jQuery("a.dmenableimage").addClass("dmimageActive"); 
	    jQuery("a.dmdisableimage").removeClass("dmimageActive"); 
	});
    }
    function dmfunctsizeone(){
	jQuery('#allEntries').css({
	    fontSize:'14px',
	    fontWeight: 'normal'
	});
	jQuery('.eTitle a ').css({
	    fontSize:'14px',
	    fontWeight: 'normal'
	});
	jQuery('.eTitle').css({
	    fontSize:'14px',
	    fontWeight: 'normal'
	});
	jQuery('.eBlock').css({
	    fontSize:'14px',
	    fontWeight: 'normal'
	});
	jQuery('.dmchangea1').css({
	    color:'#ffffff',
	    fontSize:'14px',
	    background:'#000000'
	});
	
	jQuery('.dmchangea3').css({
	    color:'',
	    fontSize:'23px',
	    background:'normal'
	});
	
	jQuery('.dmchangea2').css({
	    color:'',
	    fontSize:'18px',
	    background:'normal'
	});
	jQuery(document).ready(function(){
	    jQuery("a.dmchangea1").addClass("dmchangeaActive"); 
	    jQuery("a.dmchangea2").removeClass("dmchangeaActive");
	    jQuery("a.dmchangea3").removeClass("dmchangeaActive");
	});
	setCookie("uGostfontfordk", "fontsize1", "Mon, 01-Jan-2018 00:00:00 GMT", "/");
location.reload();
    }
    function dmfunctsizetwo(){
	jQuery('#allEntries').css({
	    fontSize:'18px',
	    fontWeight: 'bold'
	});
	jQuery('.eTitle a ').css({
	    fontSize:'18px',
	    fontWeight: 'bold'
	});
	jQuery('.eTitle').css({
	    fontSize:'18px',
	    fontWeight: 'bold'
	});
	jQuery('.eBlock').css({
	    fontSize:'18px',
	    fontWeight: 'bold'
	});
	jQuery('.dmchangea3').css({
	    color:'',
	    fontSize:'23px',
	    background:''
	});
	jQuery('.dmchangea1').css({
	    color:'',
	    fontSize:'14px',
	    background:''
	});
	jQuery('.dmchangea2').css({
	    color:'#ffffff',
	    fontSize:'18px',
	    background:'#000000'
	});
	jQuery(document).ready(function(){
	    jQuery("a.dmchangea2").addClass("dmchangeaActive"); 
	    jQuery("a.dmchangea1").removeClass("dmchangeaActive");
	    jQuery("a.dmchangea3").removeClass("dmchangeaActive");
	});
	setCookie("uGostfontfordk", "fontsize2", "Mon, 01-Jan-2018 00:00:00 GMT", "/");
location.reload();
    }
    function dmfunctsizethree(){
	jQuery('#allEntries').css({
	    fontSize:'23px',
	    fontWeight: 'bold'
	});
	jQuery('.eTitle a ').css({
	    fontSize:'23px',
	    fontWeight: 'bold'
	});
	jQuery('.eTitle').css({
	    fontSize:'23px',
	    fontWeight: 'bold'
	});
	jQuery('.eBlock').css({
	    fontSize:'23px',
	    fontWeight: 'bold'
	});
	jQuery('.dmchangea3').css({
	    color:'#ffffff',
	    fontSize:'23px',
	    background:'#000000'
	});
	jQuery('.dmchangea2').css({
	    color:'',
	    fontSize:'18px',
	    background:''
	});
	jQuery('.dmchangea1').css({
	    color:'',
	    fontSize:'14px',
	    background:''
	});
	jQuery(document).ready(function(){
	    jQuery("a.dmchangea3").addClass("dmchangeaActive"); 
	    jQuery("a.dmchangea1").removeClass("dmchangeaActive");
	    jQuery("a.dmchangea2").removeClass("dmchangeaActive");
	});
	setCookie("uGostfontfordk", "fontsize3", "Mon, 01-Jan-2018 00:00:00 GMT", "/");
location.reload();
    }
    
    function dmdisableimage(){
	jQuery('img').css({
	    display: 'none'
	});
	jQuery('div').css({
	    background: 'none'
	});
	jQuery('span').css({
	    background: 'none'
	});
	jQuery('body').css({
	    background: 'none'
	});
	setCookie("uGostimgfordk", "imgnone", "Mon, 01-Jan-2018 00:00:00 GMT", "/");
location.reload();
    }
    
    function dmenableimage(){
	jQuery('img').css({
	    display: 'inherit'
	});
	jQuery("img").addClass("");
	setCookie("uGostimgfordk", "imgyes", "Mon, 01-Jan-2018 00:00:00 GMT", "/");
	location.reload();
    }
    
    var dmcookiesfont = get_cookie ("uGostfontfordk");
    
    
    if(dmcookiesfont=='fontsize1' || dmcookiesfont=='fontsize0') {   //fontsize1 имеется в виду 14px
//делаем все в 14 пикселях
    jQuery("body, div, p, span, h3, a, table, td, tr, tbody, thead, header, footer, section, li, ul").css("fontSize", "14px");
    jQuery("h1").css("fontSize", "16px");
    jQuery("h2").css("fontSize", "15px");
    jQuery("#infobardm, .dmchangea1, .dmchangea2, .dmchangea3, .dmdisableimage, .dmenableimage, .dmcolor1, .dmcolor2, .dmcolor3, .dmcolor4").css("fontSize", "14px");

//делаем отступы в 30px
 jQuery("body, div, p, span, h3, a, table, td, tr, tbody, thead, header, footer, section, li, ul").css("line-height", "30px");
    jQuery("h1").css("line-height", "30px");
    jQuery("h2").css("line-height", "30px");
    jQuery("#infobardm, .dmchangea1, .dmchangea2, .dmchangea3, .dmdisableimage, .dmenableimage, .dmcolor1, .dmcolor2, .dmcolor3, .dmcolor4").css("line-height", "30px");

//выделяем текущий пункт
    	    jQuery(document).ready(function(){
		jQuery("a.dmchangea2").removeClass("dmchangeaActive"); 
		jQuery("a.dmchangea1").addClass("dmchangeaActive");
		jQuery("a.dmchangea3").removeClass("dmchangeaActive");
	    });
    } else {
	if (dmcookiesfont=='fontsize2') {  //fontsize2 имеется в виду 18px
	//делаем все в 27 пикселях
    jQuery("body, div, p, span, h3, a, table, td, tr, tbody, thead, header, footer, section, li, ul").css("fontSize", "18px");
    jQuery("h1").css("fontSize", "20px");
    jQuery("h2").css("fontSize", "19px");
    jQuery("#infobardm, .dmchangea1, .dmchangea2, .dmchangea3, .dmdisableimage, .dmenableimage, .dmcolor1, .dmcolor2, .dmcolor3, .dmcolor4").css("fontSize", "18px");

//делаем отступы в 35px
 jQuery("body, div, p, span, h3, a, table, td, tr, tbody, thead, header, footer, section, li, ul").css("line-height", "35px");
    jQuery("h1").css("line-height", "35px");
    jQuery("h2").css("line-height", "35px");
    jQuery("#infobardm, .dmchangea1, .dmchangea2, .dmchangea3, .dmdisableimage, .dmenableimage, .dmcolor1, .dmcolor2, .dmcolor3, .dmcolor4").css("line-height", "35px");

//выделяем текущий пункт
    	    jQuery(document).ready(function(){
		jQuery("a.dmchangea2").addClass("dmchangeaActive"); 
		jQuery("a.dmchangea1").removeClass("dmchangeaActive");
		jQuery("a.dmchangea3").removeClass("dmchangeaActive");
	    });
	} else {
	    if (dmcookiesfont=='fontsize3') { //fontsize3 имеется в виду 23px
	    	//делаем все в 27 пикселях
    jQuery("body, div, p, span, h3, a, table, td, tr, tbody, thead, header, footer, section, li, ul").css("fontSize", "23px");
    jQuery("h1").css("fontSize", "25px");
    jQuery("h2").css("fontSize", "24px");
    jQuery("#infobardm, .dmchangea1, .dmchangea2, .dmchangea3, .dmdisableimage, .dmenableimage, .dmcolor1, .dmcolor2, .dmcolor3, .dmcolor4").css("fontSize", "18px");

//делаем отступы в 40px
 jQuery("body, div, p, span, h3, a, table, td, tr, tbody, thead, header, footer, section, li, ul").css("line-height", "40px");
    jQuery("h1").css("line-height", "40px");
    jQuery("h2").css("line-height", "40px");
    jQuery("#infobardm, .dmchangea1, .dmchangea2, .dmchangea3, .dmdisableimage, .dmenableimage, .dmcolor1, .dmcolor2, .dmcolor3, .dmcolor4").css("line-height", "40px");

//выделяем текущий пункт
    	    jQuery(document).ready(function(){
		jQuery("a.dmchangea2").removeClass("dmchangeaActive"); 
		jQuery("a.dmchangea1").removeClass("dmchangeaActive");
		jQuery("a.dmchangea3").addClass("dmchangeaActive");
	    });


	    }
	}
    } 
    
    //аМаЕаНбаЕаМ баОаН аИ баВаЕб аНаА баАаЙбаЕ
    function dmcolor1(){
	setCookie("uGostcolorfordk", "color1", "Mon, 01-Jan-2018 00:00:00 GMT", "/");
location.reload();
    }
    function dmcolor2(){
	setCookie("uGostcolorfordk", "color2", "Mon, 01-Jan-2018 00:00:00 GMT", "/");
location.reload();
    }
    function dmcolor3(){
	setCookie("uGostcolorfordk", "color3", "Mon, 01-Jan-2018 00:00:00 GMT", "/");
location.reload();
	
    }
    var dmcookiescolor = get_cookie ("uGostcolorfordk");
    
    if(dmcookiescolor=='color1') { 
	document.write('<link type="text/css" rel="Stylesheet" href="http://dmev.me/uGost/ver1-1/11/style2.css" />');
	
    }
    if(dmcookiescolor=='color2') { 
document.write('<link type="text/css" rel="Stylesheet" href="http://dmev.me/uGost/ver1-1/11/style1.css" />');
    }
    if(dmcookiescolor=='color3') { 
	document.write('<link type="text/css" rel="Stylesheet" href="http://dmev.me/uGost/ver1-1/11/style3.css" />');
    }
    function dmreset(){ 
	setCookie("uGostcolorfordk", "color3", "Mon, 01-Jan-2010 00:00:00 GMT", "/");
	setCookie("uGostfontfordk", "color3", "Mon, 01-Jan-2010 00:00:00 GMT", "/");
	setCookie("uGostimgfordk", "color3", "Mon, 01-Jan-2010 00:00:00 GMT", "/");
		//новое в версии 1.2
setCookie("uGostSettings", "", "Mon, 01-Jan-2018 00:00:00 GMT", "/");
	//новое в версии 1.2
	location.reload();
    }
document.write('<link type="text/css" rel="Stylesheet" href="http://dmev.me/uGost/ver1-1/11/allstyles.css" />');

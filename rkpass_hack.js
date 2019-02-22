// ==UserScript==
// @name         rkpass_hack
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Sincky
// @match        http://www.rkpass.cn/tk_timu/*xuanze.html
// @match        http://www.rkpass.cn/tk_timu/*anli.html
// @require      http://code.jquery.com/jquery-1.8.0.min.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

	var str = $("body").html().match(/timu_anniu.jsp(\S*).html/);
	if(str == null){
		return;
	}
	str = str[1];
	var type = str.match(/tixing=(\S*)&amp;product_id/)[1];
	var product_id = str.match(/product_id=(\S*)&amp;paper_id/)[1];
	var page = str.match(/paper_id=(\S*)&amp;tihao/)[1];
	var number = str.match(/tihao=(\S*)&amp;pass_per_tihao_url=/)[1];
	//删除登录提示框
	$("div[class='web_shuohua_biankuang_tk']").remove();
	//logo删除
	$("td[background$='.jpg']").attr("background","");
	//修改查看接口
	var parms = "addinfotousertk('" + type + "','" + product_id + "'," + page + "," + number + ",'http://www.rkpass.cn');"
	$("#tk_tjchakanjx").removeAttr("onclick");
	$("#tk_tjchakanjx").attr("onclick",parms);


})();

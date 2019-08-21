load();
function load(){
	var str = $("body").html().match(/timu_anniu.jsp(\S*).html/);
	if(str == null){
		return;
	}
	str = str[1];
	var type = str.match(/tixing=(\S*)&amp;product_id/)[1];
	var product_id = str.match(/product_id=(\S*)&amp;paper_id/)[1];
	var page = str.match(/paper_id=(\S*)&amp;tihao/)[1];
	var number = str.match(/tihao=(\S*)&amp;pass_per_tihao_url=/)[1];
	$(".web_shuohua_biankuang_tk").remove()
	var parms = "addinfotousertk('" + type + "','" + product_id + "'," + page + "," + number + ",'http://www.rkpass.cn');"
	$("#tk_tjchakanjx").attr("onclick",parms);
}



$(function(){
	//	添加序列号
	var alink=$(".navdl");
	for(var i=0;i<alink.length;i++){
		for(var j=0;j<alink.eq(i).children().length;j++){
			alink.eq(i).children('dd').eq(j).children('a').prepend("<i>"+(j+1)+"</i>");
			alink.eq(i).children('dd').eq(2).children('a').addClass("hot");
		}
	}	
	//	添加最新标注
	for(var k=0;k<2;k++){
		alink.each(function(){
			$(this).children('dd').eq(k).children('a').addClass("hot");
		})
	}

})

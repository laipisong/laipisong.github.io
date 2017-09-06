//添加序号锚点
$(function(){
	if($('.article').hasClass('addmenu')){
		$('.addmenu h1').after("<dl class=\'navdl menu\'></dl>");
		$('.addmenu .menu').append("<dt>"+$('.addmenu h1').html()+"</dt>");
		var sectionid=$('.addmenu section');
		for(var i=0;i<sectionid.length;i++){
			sectionid.eq(i).attr('id','item'+(i+1));
			$('.addmenu .menu').append("<dd><a href=\'#item"+(i+1)+"\'>"+$('.addmenu section').eq(i).children('h2').html()+"</a></dd>");
		}
	}
})



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

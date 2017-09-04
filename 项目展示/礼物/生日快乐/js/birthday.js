$(function(){
	//初始化高度
	var H=$(window).height();
	var oCon=$('#content');
	var oConh=H-400;
	oCon.height(oConh);
	
	
	
	//changeTxt
	var oAsk=$('#ask');
	var oAnswer=$('.zimu marquee');
	var otxtVal='';
	oAsk.change(function(){
		otxtVal=oAsk.val();
		changeZimu(otxtVal);
	})
	//数组name say
	var aAsk=new Array(
		'闫松',
		'王松',
		'傻狗',
		'赖皮',
		'张明',
		'小明明'
	);
	var aAnswer=new Array(
		'写我干嘛',
		'你个傻狗！！！',
		'我叫你你敢答应吗？',
		'赖皮是条狗',
		'明哥吉祥！！！',
		'大神果然是大神'
	);
	
	
	
	

	function changeZimu(value){
		
		//	随机数判断,改变字幕样式
		var suijishu=Math.random();
		if(suijishu>0.5){
			$('.zimu').css('animation','transform 3s ease 0s alternate none infinite')
		}else{
			$('.zimu').css('animation','none')
		}
		
	
		for(var i=0; i<aAsk.length; i++){
			if(value==aAsk[i]){
				oAnswer.html(aAnswer[i]);
				if(value==aAsk[1]){
					var settime=setTimeout(function(){
						birthdayShow();
						// window.open("html/rose.html","打开窗口","width=500,height=500");
					},2000);
				}
				return;
			}
		}
	}
	
	

	
	


	
	//打开一个新页面
	function newWin(){
		var oWin = window.open("html/rose.html","打开窗口","width=400,height=200");
	}
	//礼物动画显隐
	var oCons=$('#birthday');
	var oAsk=$('#ask');
	function birthdayShow(){
		oAsk.slideUp('fast');
		oCons.append('<iframe id="ifram" frameborder="0" noresize="noresize" scrolling="no" src="html/birthday.html" width="100%" height="330px"></iframe>')
	}
	
	
	
	
	
})

$(function(){
	//初始化高度
	var H=$(window).height();
	var oCon=$('#content');
	var oIfram=$('#ifram');
	var oConh=H-500;
	oCon.height(oConh);
	oIfram.height(oConh);
})

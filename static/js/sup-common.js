//根节点字体大小的计算
	//初始调用一次方法
	fontSize()
	//每次改变屏幕尺寸时 都去调用一次计算字体大小的方法
	window.onresize = function(){
		fontSize()
	}
	function fontSize(){
		//768 600px  750px  
		//盒子的宽度比上字体大小和 = 750/100
		//手机屏幕计算的是物理像素的宽度 需要乘以2
		var width  = document.documentElement.clientWidth;
		//此处 限制大小上面就要乘以2 不限制大小上面就不用乘以2 都可以
		//此处只是限制了750px 也就是手机端 对于ipad等并没有做限制，就让其跟着手机端大小显示
		width = width > 750 ? 750 : width;
		fontsize = width/750*100;
		document.querySelector("html").style['font-size'] = fontsize + 'px'
	}


// 轮播图
$(function(){
	var swiper = new Swiper(".swiper-container",{
		prevButton:".swiper-button-prev",
		nextButton:".swiper-button-next",
		autoplay:1500,
	});
});

//下拉菜单
$(function(){
		$(".select").css("display","none");
		var state=0;
		$(".nav_left").click(function(){
			if(state==0){
				$(".select").show();
				$(".arr").css("transform","rotate(180deg)");
				state=1;
			}else{
				$(".select").hide();
				$(".arr").css("transform","rotate(360deg)");
				state=0;
			}
		});
		$(".select li").click(function(){
			$(".city").html($(this).html());
		});
});
// 倒计时
window.onload = function(){
	start.onclick = clock;
	setInterval(clock,500);
	function clock(){
		var newTime = new Date(2017,5,20,10,20,00);// 数字设置时间
		var nowTime = new Date();// 当前时间

		var onlyTime = Math.floor((newTime-nowTime)/1000);// 得到的数值是以毫秒为单位的，除以1000得到秒数
		var strTime = Math.floor(onlyTime/86400)+":"+ Math.floor(onlyTime%86400/3600)+":"+Math.floor(onlyTime%86400%3600/60);
		start.innerHTML = strTime;
	}
}
//展开收起
$(function(){
	$("#check1").click(function(){
		$("#check1").css("display","none");
		$("#like_hide").css("display","block");
		$("#check2").css("display","block");
	});
	$("#check2").click(function(){
		$("#check1").css("display","block");
		$("#like_hide").css("display","none");
		$("#check2").css("display","none");
	});
});
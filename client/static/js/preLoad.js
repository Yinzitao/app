//预加载
function preLoad(back){
	var preload=document.getElementById('preload');
	var percent=document.getElementById('percent');
	var barPercent=document.getElementById('bar_percent');
	var arr=["static/img/image1.png","static/img/image2.png","static/img/image3.png","static/img/image4.png","static/img/image5.png","static/img/arrow.png","static/img/lbj.jpg","static/img/bj.jpg"];
	var nums=0;
	console.log(arr)
	for(var i=0;i<arr.length;i++){
		var img=new Image();
		img.onload=function(){
			nums++;
			var percentNum=(nums/arr.length*100).toFixed(0)+"%";
			percent.innerHTML=percentNum;
			barPercent.style.width=percentNum;
			if(nums==arr.length){
				preload.style.display='none';
				$('.page0').css('display','block');
				init();
			}
			// preload.style.display='none';
			// 	$('.page1').css('display','block');
			// 	init();
		}
		img.src=arr[i];
	}
}

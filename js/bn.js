// // //图片无缝轮播
// window.onload=function(){
// 	var bn=$(".bannerzj")[0];
// 	var imgs=$(".bannerzja");
// 	var lis=$(".bnli",bn);
// 	var bnan=$(".bnanniu")[0];
// 	// console.log(bnan);
// 	var bnanlf=$(".bnanniulf")[0];
// 	// console.log(bnanlf);
// 	var bnanri=$(".bnanniuri")[0];
// 	// console.log(bnanri);
// 	var flag=true;    //解决轮播快速显示bug 
// 	// console.log(imgs);
// 	var num=0;  
//             var index=0;
//             var imgW=parseInt(getStyle(imgs[0],"width"));  //获取图片宽度
//             for(var i=0; i<imgs.length;i++){  
//      //让所有的图片都移到右边
//   //    if(i==0){
//   // continue;
//   // }
//   imgs[i].style.left=imgW+"px";
  
// }
// imgs[0].style.left=0+"px"               //让第一张图片显示
// bnanlf.src="./image/newbannerbg2.png";   //第一个按钮显示
// var t=setInterval(move,1000);
// bn.onmouseover=function(){      //鼠标放上清除函数，暂停轮播
//   clearInterval(t);
// }
// bn.onmouseout=function(){      //鼠标移走函数继续运行
//   clearInterval(t);
//   t=setInterval(move,1000);
// }
// for(var i=0; i<lis.length;i++){     //for
//   lis[i].index=i;              //用lis[i]的index来储存i的值
//   lis[i].onclick=function(){
//     for(var i=0; i<image.length;i++){        //for让所有的bnan圆变为灰色
//      lis[i].style.background="#3e3e3e";
//    lis[i].style.background="#red";  //让点击的圆（index）变为红色
//     imgs[this.index].style.left=imgW+"px";         //让点击要出现的图片准备好
//     animate(imgs[index],{left:-imgW},600 );       //让当前index图片移出
//     animate(imgs[this.index],{left:0},600);        //让num图片进入
//     index=num=this.index;                    // 点击后Num index 都为当前this.index
//   }
// }

// IbnexR.onclick=function(){
//   move();
// }
// IbnexL.onclick=function(){
//   moveL();
// }

// function move(){
//   if(!flag){    //  如果为假 证明门还是关的，直接返回 等执行完之后再处理
//     return;     // 如果为真，证明函数已经执行完，可以进入
//   }
// flag=false;       //进入后改为false 也就是把门关上
//   num++;    
//   if(num==imgs.length){    
//     num=0;
//   }
//   imgs[num].style.left=imgW+"px";  //让下一张图片到位准备轮播
//   animate(imgs[index],{left:-imgW},600,function(){  //让当前index图片移出
//     flag=true;                  //利用回调函数返回true 证明门已开    
//   });
//   animate(imgs[num],{left:0},600,function(){   //让num图片进入
//     flag=true;
//   });
//     for(var i=0; i<imgs.length;i++){
//       bnan[i].src="./image/newbannerbg.png";   //for使圆都变灰
//     }
//     bnan[num].src="./image/newbannerbg2.png";  //让num图片，也就是当前图片变色
//   index=num;           //因为num图片已经进入，所以num赋值给Index

// }
// function moveL(){
//   if(!flag){
//     return;
//   }
// flag=false;       //解决轮播快速显示bug
//   num--;    
//   if(num<0){    
//     num=imgs.length-1;
//   }
//   imgs[num].style.left=imgW+"px";  //让下一张图片到位准备轮播
//   animate(imgs[index],{left:-imgW},600,function(){  //让当前index图片移出
//     flag=true;         
//   });
//   animate(imgs[num],{left:0},600,function(){   //让num图片进入
//     flag=true;
//   });
//     for(var i=0; i<imgs.length;i++){
//        lis[i].style.background="#3e3e3e";  //for使圆都变灰
//     }
//     lis[i].style.background="#red";  //让num图片，也就是当前图片变色
//   index=num;           //因为num图片已经进入，所以num赋值给Index

// }


// }

//             // 把所有图片放到右边
//             for(var i=0;i<imgs.length;i++){
//             	imgs[i].style.left=imgW+"px";
//             }
//             imgs[0].style.left=0+"px";
//             var t=setInterval(move,1000)
//             function move(){
//             	   num++;
//             	   if(num==imgs.length){
//             	   	num=0;
//             	   }
//             	   for(var i=0;i<imgs.length;i++){
//             	   	 imgs[i].style.zIndex=0;
//             	   }
//             	   imgs[num].style.zIndex=3;
//             }
// }


















   window.onload=function(){
	var bn=$(".bannerzj")[0];
	var imgs=$(".bannerzja");
	var lis=$(".bnli",bn);
	var bnan=$(".bnanniu")[0];
	// console.log(bnan);
	var bnanlf=$(".bnanniulf")[0];
	// console.log(bnanlf);
	var bnanri=$(".bnanniuri")[0];
	// console.log(bnanri);
	var flag=true;
	// console.log(imgs);
	var num=0;
	var t=setInterval(move,2000);


	bn.onmouseover=function(){
		clearInterval(t);
		bnanlf.style.display="block";
  	    bnanri.style.display="block";
	}
	bn.onmouseout=function(){
		clearInterval(t);
		t=setInterval(move,1000);
		bnanlf.style.display="none";
  	    bnanri.style.display="none";
	}
	
    for(var i=0;i<lis.length;i++){
    lis[i].index=i;  //保存当前的i
    lis[i].onclick=function(){
      num=this.index;   //当前页赋值给Num
      for(var j=0;j<imgs.length;j++){
        animate(imgs[j],{opacity:0},1000);   //动画效果
        // imgs[j].style.zIndex=0;
        lis[j].style.background="#3e3e3e";
      }
      animate(imgs[num],{opacity:1},1000);  //动画效果
      // imgs[num].style.zIndex=3;    
      lis[num].style.background="red";

    }
  }
  bnanri.onclick=function(){
  	move();
  }
  bnanlf.onclick=function(){
  	if(!flag){
                          return; 
                        }            //把手用开关
                        flag=false;
  	    num--;
    if(num<0){
      num=imgs.length-1;
    }
    for(var i=0; i<imgs.length; i++){
     animate(imgs[i],{opacity:0},1000,function(){flag=true});   //动画效果
        // imgs[j].style.zIndex=0;
        lis[i].style.background="#3e3e3e";

}
     animate(imgs[num],{opacity:1},1000,function(){flag=true});  //动画效果
      // imgs[num].style.zIndex=3;    
      lis[num].style.background="red";
  }
	function move(){
		 if(!flag){
                          return; 
                        }            //把手用开关
                        flag=false;
		num++;
		if(num==imgs.length){
		num=0;	
		}
	for (var i=0;i<imgs.length;i++){
		 // imgs[i].style.zIndex=0;
		  lis[i].style.background="#3e3e3e";
		  animate(imgs[i],{opacity:0},1000,function(){flag=true}); 
	}
	 // imgs[num].style.zIndex=3;
	      lis[num].style.background="red";
	      animate(imgs[num],{opacity:1},1000,function(){flag=true}); 
	 }
}

var floor=$(".f1zj");
console.log(floor)
	//获取所有的floor对象
	var  floorArr=[];//遍历 将每个floor的y轴高度存入floorArr
	for(var i=0;i<floor.length;i++){
		floorArr.push(floor[i].offsetTop)
	}
	
	//获取当前可视的范围 即浏览器的高度
	var cH=document.documentElement.clientHeight;
    // alert(cH)
//楼层跳转
//将楼层盒子  放在 显示窗口的中间位置

	var jump=document.getElementById(".jump");
    console.log(jump)
	var lis=$("li",jump);
      console.log(lis)
	//获取top back
	var search=$(".top")[0];


	//获取楼层盒子高度  进行位置控制
	var jH=jump.offsetHeight;
	//中间位置
	jump.style.top=(cH-jH)/2+"px";
//  开关 控制滚动条事件window.onscroll
	var flag=true; 




	//通过操作 滚动条的高度  实现跳转

	for(var i=0;i<lis.length;i++){
		lis[i].index=i;
		 //alert(lis.length)
		lis[i].onclick=function(){
			flag=false;
			var obj=document.body.scrollTop?document.body:document.documentElement
			//控制滚动条 到 当前楼层的高度
			animate(document.documentElement,{scrollTop:floor[this.index].offsetTop},function(){
				flag=true;
			});
			for(var j=0;j<lis.length;j++){
				lis[j].style.background="#f4f4f4";

			}
			lis[this.index].style.background="red";
	}
	}
var flagD=true;
var flagU=true;
	window.onscroll=function(){
		 if(!flag) return;
		 //scrollTop 为0时 兼容性问题 不能解决
		 //手动 设置scrollTop 的值不为0  或分开执行
		var obj=document.body.scrollTop?document.body:document.documentElement
		var tops=obj.scrollTop;
		// alert(tops)
		//获取滚动条滑动的高度
		// var tops=document.body.scrollTop;
		for(var i=0;i<floor.length;i++){
			//判断  可视范围 +滚轮高度>=offsetTop 
			if(tops+cH>=floorArr[i]+200){
				//获取当前楼层下的所有图片
				var imgs=$("img",floor[i]);
				
				for(var j=0;j<imgs.length;j++){
					imgs[j].src=imgs[j].title;
				

				}
			}
		}
	}	
		//jump 色块变化
		for(var i=0;i<floor.length;i++){
			if(tops+cH>=floorArr[i]+200){
				for(var j=0;j<lis.length;j++){
				lis[j].style.background="#f4f4f4";

			}
			lis[i].style.background="red";
			}
		}
// 没封装之前
// window.onload=function(){
// 	var bn=$(".bannerzj")[0];
// 	var imgs=$(".bannerzja");
// 	// console.log(imgs);
// 	num=0;
// 	setInterval((function (){
// 		num++;
// 		if(num==imgs.length){
// 		num=0;	
// 		}
// 	for (var i=0;i<imgs.length;i++){
// 		 imgs[i].style.zIndex=0;
// 	}
// 	 imgs[num].style.zIndex=3;
// 	 }
// ),1000)
// }

// 没封装前的点点
// window.onload=function(){
// 	var bn=$(".bannerzj")[0];
// 	var imgs=$(".bannerzja");
// 	var lis=$(".bnli",bn);
// 	var num=0;
// 	console.log(lis);
// 	setInterval((function (){
// 		num++;
// 		if(num==imgs.length){
// 		num=0;	
// 		}
// 	for (var i=0;i<imgs.length;i++){
// 		imgs[i].style.zIndex=0;
// 		 lis[i].style.background="#3e3e3e";
		
// 	}
// 	  lis[num].style.background="red";
// 	  imgs[num].style.zIndex=3;
// 	 }
// ),1000)

// }












// window.onload=function(){
// 	var bn=$(".bannerzj")[0];
// 	var imgs=$(".bannerzja");
// 	var lis=$(".li",bn)
// 	console.log(lis);
// 	num=0;
// 	var t=setInterval(move,1000)
// 	function move(){
// 		num++;
// 		if(num==imgs.length){
// 		num=0;	
// 		}
// 	for (var i=0;i<imgs.length;i++){
// 		 imgs[i].style.zIndex=0;
// 	}
// 	 imgs[num].style.zIndex=3;
// 	 }
// }

	
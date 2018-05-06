//轮播
function task(){
    var show=
        document.querySelector("#banner .show");
    show.className="";
    if(show.nextElementSibling!=null){
        show.nextElementSibling.className="show";
    }else{
        show.parentNode.children[0].className="show";
    }
}
var timer=setInterval(task,3000)
banner.onmouseover=function(){
    clearInterval(timer);
    this.timer=null;
}
banner.onmouseout=function(){
    timer=setInterval(task,3000)
}
var imgs=document.querySelectorAll(
    "#banner img"
);
for(var img of imgs){
    img.onclick=function(){
        alert(this.alt);
    }
}




//banner 小圆点

//banner图下面的小图 鼠标移动移除

$(".left a").mouseover(function(){
    $(this).siblings().css("opacity",1)
}).mouseout(function(){
    $(this).siblings().css("opacity",0)
});
//视频
$(".ad").click(function(){
    $(this).next().next().show();
});
//优秀学员鼠标移入移出
$(".oop").mouseover(function(){
    $(this).siblings().show();
});
$(".ooo").mouseout(function(){
    $(this).hide();
});
//校园环境鼠标移入移出
$(".ev-bottom>li>img").mouseover(function(){
    $(this).siblings(".ev-moban").show();
});
$(".ev-moban").mouseout(function(){
    $(this).hide();
});

$(".box>li").mouseover(function(){
    $(this).css("marginTop","20px");
}).mouseout(function(){
    $(this).css("marginTop",0);
})
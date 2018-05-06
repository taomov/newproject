/**
 * Created by guowei01 on 2018/1/16.
 */
////引用头部
$(()=>{
    $("#header").load(
        "header.html",
        (()=>{
            //首页顶部导航单击“全栈课程”连接时展开下方具体课程信息
            $(".nav ul li:eq(1)").on("mouseenter",function(){
                $('.nav_pic').stop().slideDown();
                $('.nav').stop().animate({'height':'200px'},500);

            }).on("mouseleave",function(){
                $('.nav_pic').stop().slideUp();
                $('.nav').stop().animate({'height':'38'},500);
            }),$(".meau-xiala").mouseenter(function(){
                    $(this).children(".xiala").stop().slideDown();
                }).mouseleave(function(){
                    $(this).children(".xiala").stop().slideUp();
                })
         })
    );
});







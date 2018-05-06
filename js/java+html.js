/**
 * Created by guowei01 on 2018/1/29.
 */
//查找class为tabs的div下的ul下的li下的a，保存在变量as中
var as=document.querySelectorAll("ul.fl>li>a");
for(var a of as){//遍历as中每个a
    a.onclick=function(e){//为a绑定单击事件
        e.preventDefault();
        //this=>a
        //获得id为container下的所有直接子元素div,保存在divs中
        var divs=document.querySelectorAll(".java-centerbottom>.java-stylecontent");
        for(var div of divs){//遍历divs中每个div
            div.style.zIndex="";//清除div的zIndex
        }
        //获得当前a的href属性中最后一个#的位置i
        var i=this.href.lastIndexOf("#");
        //选取当前a的href属性中i位置之后的剩余内容，作为id
        var id=this.href.slice(i+1);
        //alert(id);
        //用id查找对应div，设置其zIndex为10
        document.getElementById(id).style.zIndex=10;
    }
}

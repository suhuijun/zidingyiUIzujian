var $lunBoTu = (function(){
    // 定义slider模块
    var d1 = $("<div></div>").addClass("slider").attr('id','slider');

    // 定义图片容器
    var dit5 = $("<div></div>").addClass("slide").attr('id','dit5');
    var di1 = $("<div></div>").addClass("slide").attr('id','di1');
    var di2 = $("<div></div>").addClass("slide").attr('id','di2');
    var di3 = $("<div></div>").addClass("slide").attr('id','di3');
    var di4 = $("<div></div>").addClass("slide").attr('id','di4');
    var di5 = $("<div></div>").addClass("slide").attr('id','di5');
    var diw1 = $("<div></div>").addClass("slide").attr('id','diw1');

    // 定义图片
    var i1 = $("<img>").attr("src","../img/b1.png");
    var i2 = $("<img>").attr("src","../img/b2.png");
    var i3 = $("<img>").attr("src","../img/b3.png");
    var i4 = $("<img>").attr("src","../img/b4.png");
    var i5 = $("<img>").attr("src","../img/b5.png");

    //定义left/right
    var left = $("<span></span>").attr('id','left').text("<").addClass("btn");
    var right = $("<span></span>").attr('id','right').text(">").addClass("btn");

    //定义圆点
    var nav = $("<ul></ul>").addClass("nav").attr('id','navs')
    var li1 = $("<li></li>").text("1").attr('id','li1');
    var li2 = $("<li></li>").text("2").attr('id','li2');
    var li3 = $("<li></li>").text("3").attr('id','li3');
    var li4 = $("<li></li>").text("4").attr('id','li4');
    var li5 = $("<li></li>").text("5").attr('id','li5');

    var timer = null;
    var index = 0 ;

    function show(container){
        $(container).append(d1);

        $('#slider').append(di1,di2,di3,di4,di5);

        $('#di1').append(i1);
        $('#di2').append(i2);
        $('#di3').append(i3);
        $('#di4').append(i4);
        $('#di5').append(i5);
        
        $('#box').append(left,right,nav);
        $('#navs').append(li1,li2,li3,li4,li5)

        $("#right").click(function(){ //下一张
            next();
        });
        $("#left").click(function(){ //下一张
            prev();
        });
        
        function next(){
            index++;
            if(index > 4){
                /*
                当图片到最后一张时跳回第一张，本例中在最后一张中放入了第一张的图片，为实现无缝切换图片的效果。
                */
                 $(".slider").animate({left:-(index)*1200},500); 
                 index = 0;
                 $(".slider").animate({left:0},0); //
            }
            console.log(index);
            $(".slider").animate({left:-index*1200},500);
            iconHover(index);
        }
        
        function prev(){
            index--;
            if(index < 0 ){
                index = 4;
                $(".silder").animate({left:-(index+1)*1200},0);
            }
            $(".slider").animate({left:-index*1200},500);
            iconHover(index);
        }
        
        function auto(){ 
                timer = setInterval(function(){ //设置自动播放的定时器
                    next();
                    iconHover(index);
            },2000) 
        }
        
        auto();
        
        $("#slider").mouseover(function(){ //鼠标移入 定时器取消
            clearInterval(timer);
            $('.btn').css("opacity",0.5)
        })
        $("#slider").mouseleave(function(){ //鼠标离开 定时器开启
            auto();
            $('.btn').css("opacity",0)
        })
        
        $(".nav li").mouseover(function(){ 
            var index = $(this).index();
            $(".slider").animate({left:-index*1200},500);
            iconHover(index);
        })
        
        function iconHover(index){
            console.log(index);
            $(".nav li").eq(index).addClass("active").siblings().removeClass("active");
        }
    }

    return {
        show:show
    };

}())
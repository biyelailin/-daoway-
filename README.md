### 1.滚动条滚动到某个位置显示某个div,但你要知道，滚动到哪个特定位置，
     例如滚动到一个标题h3那显示这个div，那么可以用jquery算这个h3距离网页顶部的距离：$("h3").offset().top，这个值有了后，
     还要算滚动条的距离$(this).scrollTop()。第一个值是不固定的，主要是第二个值是不断在变，所以要写到滚动方法里：$(window).scroll()。
     大概整个代码是
     $(function(){
         var h3_height = $("h3").offset().top;
         $(window).scroll(function(){
             var this_scrollTop = $(this).scrollTop();
             if(this_scrollTop>h3_height ){
                 $("div").show();
             }
         });
     });
     2.用swiper插件，做轮播渐变，配置是：
      var swiper = new Swiper('.swiper-container', {
          effect : 'fade',
          fade: {
            crossFade: true,
          },
          autoplay: {
             delay: 3500,
            disableOnInteraction: false,
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
        });
      3.做二级菜单是：
         <ul>
         <li>
          <ul>
            这里是hover显示的二级菜单
          </ul>
         </li>
         </ul>
         通过li:hover
 ### 第二天
     进度：静态页面 第三页剩分页器
      问题：1. header 的动画做不对，晚上问经理
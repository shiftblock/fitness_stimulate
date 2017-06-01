/* 
* @Author: Marte
* @Date:   2017-05-31 15:51:11
* @Last Modified by:   Marte
* @Last Modified time: 2017-05-31 19:05:33
*/
var $ = require("com/jquery-3.1.1.min.js");
require("com/swiper.min.js");
var swiperAnimateCache=require("com/swiper.animate1.0.2.min.js").bb;
var ttt = require("index.string");
console.log(ttt);
$('body').prepend(ttt);


var swiperAnimate=require("com/swiper.animate1.0.2.min.js").swiperAnimate;
var clearSwiperAnimate=require("com/swiper.animate1.0.2.min.js").clearSwiperAnimate;

            (function() {
            function a() {
                var a = document.getElementsByTagName("html")[0],
                b = document.documentElement.clientWidth;
                640 <= b && (b = 640);
                a.style.fontSize = b / 20 / 18.75 * 625 + "%"
            }
            a();
            var b;
            window.addEventListener("resize",
            function() {
                clearTimeout(b);
                b = setTimeout(a, 300)
            },!1);
            window.addEventListener("pageshow", function(c) {
                c.persisted && (clearTimeout(b), b = setTimeout(a, 300))
            },!1);
        })();


$(".aud").click(function(){

                           if ($("#audio")[0].paused==false) {
                              $("#audio")[0].pause();
                              $(".aud img").attr("src","pic/pause.png");
                              $(".aud img").css("animation","null");
                           }else {
                             $("#audio")[0].play();
                             $(".aud img").attr("src","pic/play.png");
                             $(".aud img").css("animation","rtt 2s linear infinite");
                           }
                         });

 var mySwiper = new Swiper ('.swiper-container', {
            direction: 'vertical',
            loop: true,
            onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
    swiperAnimateCache(swiper); //隐藏动画元素
    swiperAnimate(swiper); //初始化完成开始动画
  },
  onSlideChangeEnd: function(swiper){
    swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
  },
            // 如果需要分页器
            pagination: '.swiper-pagination'

            // 如果需要前进后退按钮
            // nextButton: '.swiper-button-next',
            // prevButton: '.swiper-button-prev',

            // // 如果需要滚动条
            // scrollbar: '.swiper-scrollbar',
          });


            $.ajax({
              url: 'api/getLivelist.do',
              type: 'GET',
              dataType: 'json',
              data: {},
            })
            .done(function(e) {
              console.log(e);
            })
            .fail(function() {
              console.log("error");
            })
            .always(function() {
              console.log("complete");
            });

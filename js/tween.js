$(function() {

//====================
//選單
//====================


$('a.page-scroll').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
              $('html,body').animate({
                  scrollTop: target.offset().top
              }, 1000);
              return false;
          }
      }
  });
  console.log('nav ok');


  /* ==============================================
       回到最頂端
       =============================================== */
     $(window).scroll(function(){
       var offset_height = 400;
       var distance =$(window).scrollTop();

       if (distance > offset_height){
          $('.gototop').addClass('on');
       }else {
         $('.gototop').removeClass('on');
       }
     });

     $('.gototop').on('click',function(e){
       event.preventDefault();
       $('body,html').animate({
         scrollTop: 0,
       },700);
       console.log('gototop');
     });


     /* ==============================================
         選單出現
        =============================================== */


        $(window).scroll(function(){
          var offset_height = 700;
          var distance =$(window).scrollTop();

          if (distance > offset_height){
             $('.navbar').addClass('on');
          }else {
            $('.navbar').removeClass('on');
          }
        });








//第一個場景動畫
    TweenMax.fromTo(".section_01 .title", 2, {
        y: -150,
        opacity: 0,
    }, {
        y: 0,
        opacity: 1,
        ease: Bounce.easeOut

    });

    TweenMax.fromTo(".section_01 .content", 2, {
        x: -150,
        opacity: 0,
    }, {
        x: 0,
        opacity: 1,
        delay: 2,
        ease: Power1.easeOut
    });

    console.log("ok");
    //scrollmagic start

    var controller = new ScrollMagic.Controller();
    // new 場景

    var wp = new TimelineMax().staggerFromTo('.flow .item', 0.5, {
        y: -50,
        opacity: 0
    }, {
        y: 0,
        opacity: 1,
    }, 0.1);



    console.log("time");
    var scene = new ScrollMagic.Scene({
            triggerElement: "#section_01",
            reverse: true,
            offset:'100px',
            // duration: '90%'
        })

        .setTween(wp)
        .addIndicators() // add indicators (requires plugin)
        .addTo(controller);
    //  add css

    var ourScene = new ScrollMagic.Scene({
        triggerElement: "#section_02",
        offset:'200px'
    })
     .setClassToggle('.icon','fade-in')
     .addIndicators({name :'bgc start'})
     .addTo(controller);


// 改變背景顏色
var bgc_sence = new ScrollMagic.Scene({
    triggerElement: "#section_03",
    offset:'100px'
})
 .setClassToggle('.bgc','color_fadein')
 .addIndicators({
    name :'bgc start'
 })
 .addTo(controller);

//sticky box

var scene_sticky = new ScrollMagic.Scene({
  triggerElement: "#section_04",
  duration: 200,
  offset: 10
})

.setPin("#sticky" ,{spacerClass: 'asd'})
.addIndicators({
   name :'sticky start'
})
.addTo(controller);

//移動字

var scene_move = new ScrollMagic.Scene({

  triggerElement: "#section_05",
  duration: 400,
  reverse: true,
})

  .setTween(TweenMax.staggerTo(".section_06 .title" , 1 ,{
      opacity: 1,
      x : 1350,
      ease: Strong.easeInOut

  }))
  .addIndicators({
     name :'move'
  })
.addTo(controller);

console.log('move ok');
//stellar init


$('#container').stellar({

  horizontalOffset: 0,
  verticalOffset: 0,


});




});

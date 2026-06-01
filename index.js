let aboutOffset = $("#About").offset().top;
$(window).scroll(function () {
  let wScroll = $(window).scrollTop();
  if (wScroll > aboutOffset - 50) {
    $("#OSAKA").css("backgroundColor", "red");
    $("#btnUp").fadeIn(500); //show btn
  } else {
    $("#OSAKA").css("backgroundColor", "transparent");
    $("#btnUp").fadeOut(500); //
  }
});

$("#btnUp").click(function () {
  //$(window).scrollTop(0);
  $("html,body").animate({ scrollTop: 0 }, 2000);
});
$("#btnDown").click(function () {
  //$(window).scrollTop(0);
  $("html,body").animate({ scrollTop: 3100 }, 2000);
});
$("nav a").click(function (e) {
  let x = $(e.target).attr("href");
  //$(window).scrollTop(0);
  let serviceOffset = $(x).offset().top;
  $("html,body").animate({ scrollTop: serviceOffset }, 2000);
});

// تحميل للموقع
//ready جاهزه في jquery
$(document).ready(function () {
  $("#loading .spinner").fadeOut(1000, function () {
    $("#loading").remove();
    $("body").css("overflow-y", "auto");
  });
});
let item=$('.color-item')
item.eq(0).css("backgroundColor", "green");
item.eq(1).css("backgroundColor", "orange");
item.eq(2).css("backgroundColor", "tomato");
item.eq(3).css("backgroundColor", "#09c");
item.eq(4).css("backgroundColor", "red");
 item.click(function(e){
    let bgColor=$(e.target).css('background-color');
    $('h2,h3').css('color',bgColor);
  })
    $('#options i').click(function(){
      $('#colorBox').toggle(1000);
    });

   

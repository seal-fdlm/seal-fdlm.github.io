
$(".text_wrapper").hide();
	$(".text_wrapper2").hide();
	$("div.foot #s1").click(function(){
		
  		var bgWidth = $(".announce_bg").width();
  		var bgHeight = $(".announce_bg").height();
  		var itemWidth = $("#w1").width();
  		var itemHeight = $("#w1").height();
  		var screenWidth = $(window).width();
  		var screenHeight = $(window).height();
  		var scrollWidth = $(document).scrollLeft();
  		var scrollHeight = $(document).scrollTop();
  		var Top = (screenHeight-itemHeight)/2;
  		var Left = (screenWidth-itemWidth)/2;
  		var bgTop = (screenHeight-bgHeight)/2;
  		var bgLeft = (screenWidth-bgWidth)/2;
		
		
		  $(".announce_bg").attr({"display":"block"}).fadeIn(500);
      $("#w1").css({"left":Left+"px","top":Top+"px","z-index":99}).fadeIn(500);		 
	});
	$("div.confirm").click(function(){
		
		  $(".announce_bg").fadeOut(500);
		  $("div.text_wrapper").fadeOut(500);
		
	});
		
	$("div.foot #s2").click(function(){
		
  		var bgWidth = $(".announce_bg").width();
  		var bgHeight = $(".announce_bg").height();
  		var itemWidth = $("#w2").width();
  		var itemHeight = $("#w2").height();
  		var screenWidth = $(window).width();
  		var screenHeight = $(window).height();
  		var scrollWidth = $(document).scrollLeft();
  		var scrollHeight = $(document).scrollTop();
  		var Top = (screenHeight-itemHeight)/2;
  		var Left = (screenWidth-itemWidth)/2;
  		var bgTop = (screenHeight-bgHeight)/2;
  		var bgLeft = (screenWidth-bgWidth)/2;
		
		
  		$(".announce_bg").attr({"display":"block"}).fadeIn(500);
      $("#w2").css({"left":Left+"px","top":Top+"px","z-index":99}).fadeIn(500); 
	});
	$("div.confirm2").click(function(){	
  		$(".announce_bg").fadeOut(500);
  		$("div.text_wrapper2").fadeOut(500);	
	});

  $("div.foot #s3").click(function(){
      var bgWidth = $(".announce_bg").width();
      var bgHeight = $(".announce_bg").height();
      var itemWidth = $("#w3").width();
      var itemHeight = $("#w3").height();
      var screenWidth = $(window).width();
      var screenHeight = $(window).height();
      var scrollWidth = $(document).scrollLeft();
      var scrollHeight = $(document).scrollTop();
      var Top = (screenHeight-itemHeight)/2;
      var Left = (screenWidth-itemWidth)/2;
      var bgTop = (screenHeight-bgHeight)/2;
      var bgLeft = (screenWidth-bgWidth)/2;  
          
      $(".announce_bg").attr({"display":"block"}).fadeIn(500);
      $("#w3").css({"left":Left+"px","top":Top+"px","z-index":99}).fadeIn(500);     
  });
  $("div.confirm").click(function(){   
      $(".announce_bg").fadeOut(500);
      $("div.text_wrapper").fadeOut(500);     
  });

//comment
  var tn=0;
  if ( document.getElementById("autoComment") ){ 
        var tli=document.getElementById("autoComment").getElementsByTagName("a");
        rollText_tt=setInterval("rollText(tn)",100);
        function rollText(n){
          clearInterval(rollText_tt);
          tn++;
          if (tn>=tli.length){tn=0;}
           rollText_tt=setInterval("rollText(tn)",5000); 
          for (var j=0; j<tli.length; j++){
            tli[j].style.display=j==n?"block":"none";}
        }
  }

//procesure
$(document).ready(function(){
      $(".procedure b.b1").mouseenter(function(){
      $(".procedure b.b1").fadeOut(500);
      $(".procedure b.b1").fadeIn();
      });
      $(".procedure b.b2").mouseenter(function(){
      $(".procedure b.b2").fadeOut(500);
      $(".procedure b.b2").fadeIn();
      });
      $(".procedure b.b3").mouseenter(function(){
      $(".procedure b.b3").fadeOut(500);
      $(".procedure b.b3").fadeIn();
      });
    });

//wechat2
$(document).ready(function(){
    $("#wechat-icon").mouseenter(function() {
      $("#phone").slideUp();
      $("#wechat").slideDown();     
    });
    $("#wechat-icon").mouseleave(function() {
      $("#wechat").slideUp();
    });
     $("#wechat-icon").click(function() {
      $("#wechat").slideUp();
    });
    $("#phone-icon").mouseenter(function() {
      $("#wechat").slideUp(); 
      $("#phone").slideDown(); 
    });
    $("#phone-icon").mouseleave(function() {
      $("#phone").slideUp();
    });
});

//nav

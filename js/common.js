

$(document).ready(function(){
	// $('.testmonial-slider').slick({
	//   infinite: true,
	//   autoplay: false,
	//   slidesToShow: 2.5,
	//   slidesToScroll: 1
	  
	  
	// });


	// TAB-Slider

    $('#tab-slider1').slick({
        slidesToShow: 3,
        infinite: false,
        arrows: true,
        responsive: [
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1.5,
            }
          },
        ]
        
       });



    $('#tab-slider2').slick({
        slidesToShow: 3,
        infinite: false,
        arrows: true,
        responsive: [
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1.5,
            }
          },
        ]
        
       });



	$('.testmonial-slider').slick({
    slidesToShow: 2.3,
    infinite: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
    
   });


	$('.gallery-slider').slick({
    slidesToShow: 3.2,
    infinite: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
        }
      },
       {
        breakpoint: 767,
        settings: {
          slidesToShow: 2.5,
        }
      },
    ]
    
   });

if ($(window).width() >700) { 

	$('.slider-nav').slick({
	  centerMode: true,
	  centerPadding: '40px',
	  slidesToShow: 3,
	  autoplay:true,
	  arrows: false,
	  responsive: [
	    {
	      breakpoint: 1700,
	      settings: {
	        arrows: false,
	        centerMode: true,
	        centerPadding: '40px',
	        slidesToShow: 3
	      }
	    },
	    {
	      breakpoint: 1023,
	      settings: {
	        arrows: false,
	        centerMode: true,
	        centerPadding: '40px',
	        slidesToShow: 3
	      }
	    }
	  ]
	});

}

if ($(window).width() >700) { 

    $('.slider-nav1').slick({
	  centerMode: true,
	  centerPadding: '350px',
	  slidesToShow: 2,
	  autoplay:true,
	  arrows: false,
	  responsive: [
	    {
	      breakpoint: 1700,
	      settings: {
	        arrows: false,
	        centerMode: true,
	        centerPadding: '200px',
	        slidesToShow: 2
	      }
	    },
	    {
	      breakpoint: 1500,
	      settings: {
	        arrows: false,
	        centerMode: true,
	        centerPadding: '200px',
	        slidesToShow: 2
	      }
	    },
	    {
	      breakpoint: 1023,
	      settings: {
	        arrows: false,
	        centerMode: true,
	        centerPadding: '150px',
	        slidesToShow: 2
	      }
	    }
	  ]
	});

	
}


 $(document).on('click', '[data-tab]', function(){
    $(this).addClass("active");    
    $(this).siblings().removeClass("active");    
    var dataTab = $(this).attr('data-tab');    
    $('#'+dataTab).siblings().removeClass("active");    
    $('#'+dataTab).addClass('active');    
  })


$(".menu-btn").click(function () {
        $(".nav").addClass("active");
    })

    $(".close-btn").click(function () {
        $(".nav").removeClass("active")
    })

$("[data-show-text]").click(function(){
	$(this).prev().toggleClass("active")
	$(this).text($(this).text() == "Read Less >" ? "Read More >" : "Read Less >")
	})

$(document).click(function() {
    $(".close-enq").trigger("click")
  });

  $('.left-enq-form').click(function(e){
    e.stopPropagation();
  });

  $(document).on("click", ".register-now", function(e){
    $(".left-enq-form").css("width", "30.0rem")
    e.stopPropagation();
  })

  $(".close-enq").click(function(){
    $(".left-enq-form").css("width", "0")
  })

  $(".next-btn").click(function(){
    $(".shedule-inner-wrap").toggleClass("active")
  })



$(".com-video").click(function(){
  cVideo = $(this).attr("data-url")
  $("#main-video").attr("src", cVideo)
})



$(document).on('click', '[data-scroll]', function(){

var dataScroll = $(this).attr('data-scroll');

$('body, html').animate({scrollTop: ($('#'+dataScroll).offset() || { "top": NaN }).top})

})

var menuScroll = $('[data-scroll]');

var win = $(window);

var sections = $('.section');

win.scroll(function(e){

$.each(sections, function(key, value){

var secValue = $(value);

if(win.scrollTop() >= secValue.offset().top){

$('[data-scroll].active').removeClass('active');

var secId = secValue.attr('id');

$.each(menuScroll, function(key, value){

var menuItem = jQuery(value);

if(menuItem.attr('data-scroll') == secId)

menuItem.addClass('active');
});

}

});

});

var hh = $(".other-header").outerHeight()
  $(".main").css("margin-top", hh);

// $('.show-popup, .popup-close').click(function(){
//   $('.enq-section2').toggleClass("active");
//   $('.overlay').toggleClass("active");
// })

$( ".show-popup, .popup-close" ).each(function() {

  $(this).click(function(){

    var headtxt = $(this).parent().find(".sub-head").text();
    var paratxt = $(this).parent().find(".img-dis").attr("data-text");

    $(".p-heading").text(headtxt);
    $(".p-text").text(paratxt);


    $('.popup-box').toggleClass("active");
    $('.overlay').toggleClass("active");
  })


});





$('.box-2-content:lt(2)').show(); // Show first two child divs
$('#blog-btn').on('click', function() {
  $('.box-2-content:gt(1)').toggle(); // Toggle visibility of remaining child divs
  $(this).text($(this).text() === "Read less" ? "Read more" : "Read less")
  // Toggle 'rotate' class on the image
  $('#arrow-img').toggleClass('rotate');
  });


$('.down-arrow').on('click', function() {
  $('.box-2-content:gt(1)').toggle(); // Toggle visibility of remaining child divs
  // Toggle 'rotate' class on the image
  $('#arrow-img').toggleClass('rotate');
  });

 // var hh = $(".other-header").outerHeight()
 //  $(".main").css("margin-top", hh);


// gallery-page

$(".select").click(function () {
    $(".dropdown").toggleClass("active");
  });

  $(".dropdown li").click(function () {
    $(".dropdown").removeClass("active");
  });


  $('.img-txt').click(function () {
    var text = $(this).text();
    $(".select .span").text(text);
  });


// gallery-vc

$(".iframe").fancybox({
  type: 'iframe'
});

    $(function () {
        $(".gal-cont").each(function () {
            $(this).find(".gal-post-box").slice(0, 3).addClass("active");
            var len = $(this).find(".gal-post-box").length;
            $(this).find(".view-txt").click(function (e) {
                e.preventDefault();
                galId = $(this).closest(".gal-cont").attr("id")
                $(this).closest(".gal-cont").find(".gal-post-box:hidden").slice(0, len).addClass("active");
                $(this).hide();
            });
        })
    });


    // $(".view-txt").click(function () {
    //     $(".view-more-btn").hide();
    // });





});


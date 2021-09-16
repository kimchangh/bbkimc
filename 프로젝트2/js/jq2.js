// Can also be used with $(document).ready()
$(document).ready(function() {

   
  $('.center').slick({
    centerMode: true,
    dots:true,
    centerPadding: '60px',
    slidesToShow: 2,
    responsive: [
      {
        breakpoint: 680,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });


    $('.flex0').flexslider({
      animation: "slide",
      controlNav: "thumbnails"
    });

  });
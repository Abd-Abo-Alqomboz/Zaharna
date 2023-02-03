/* start float action buuton */
document.querySelector('.fab').addEventListener('click',function(e){
    document.querySelector('.box').classList.toggle('box-active');
    document.querySelector('.fab').classList.toggle('fab-active');
    });
/* end float action buuton */

/*------------------------ */
/* start blog page */
function  Blog_content_page() {
    window.location.assign("Blog content page.html");
  }
  /* end blog page */

  function  vr_page() {
    window.location.assign("vr_page.html");
  }
function  servies() {
    window.location.assign("our business.html");
  }
  $(document).ready(function (){
  $('.single-item').slick();
});

  $(document).ready(function (){
  $('.autoplay').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1008,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  })
});



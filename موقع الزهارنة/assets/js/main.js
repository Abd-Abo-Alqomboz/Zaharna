/* start float action buuton */
document.querySelector('.fab').addEventListener('click',function(e){
    document.querySelector('.box').classList.toggle('box-active');
    document.querySelector('.fab').classList.toggle('fab-active');
    });
/* end float action buuton */
$(document).ready(function () {
    $('.autoplay').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });
});
$(document).ready(function () {
    $('.one-time').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
    });

});
/*------------------------ */


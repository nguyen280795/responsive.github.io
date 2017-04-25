$(function () {
    //Hover menu
    $(".menu ul li p:eq(0)").addClass("hover-menu");

    $(".menu ul li p").click(function () {
        $(".menu ul li p").removeClass("hover-menu");
        $(this).addClass("hover-menu");
    });

    //Slide
    $('.bxslider').bxSlider({
        auto: true,
        autoControls: true
    });
});
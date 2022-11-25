
$( function() {
    var availableTags = [
        "Riga",
        "Vilnius",
        "Tallinn",
        "Warszawa",
        "Amsterdam",
        "Berlin",
        "Praha",
        "Paris",
        "Bruxelles",
        "Roma",
        "Wien",
        "Madrid",
        "Lisboa",
        "Helsinki",
        "Stockholm",
        "Oslo",
        "London",
        "Dublin",
        "New York",
        "Los Angeles",
        "Toronto",
        "Ottawa"
    ];
    $( "#tags" ).autocomplete({
        source: availableTags
    });
} );

$( function() {
    $( ".controlgroup" ).controlgroup()
    $( ".controlgroup-vertical" ).controlgroup({
        "direction": "vertical"
    });
} );















$( function() {
    $( "#accordion" ).accordion();
} );


$('.owl-carousel').owlCarousel({
    loop:true,
    margin: 30,

    nav:true,
    dots: false,
    navText: [ '', ' ' ],
    autoplay: false,
    autoplayTimeout:2000,
    responsive:{
        0:{
            items:1
        },

        768:{
            items:2
        },
        835:{
            items:3
        },
        1000:{
            loop:false,
            items:3
        }
    }
});





$(document).ready(() => {


    var owl = $('.mydiv').owlCarousel({
        slidesToScroll: 3,
        items: 3,
        dots: false,
        nav: true,
        loop: false,
        autoplay: false,
        autoplayHoverPause: true,
        mouseDrag: false,
    });



})






function setSlideVisibility() {
    //Find the visible slides i.e. where aria-hidden="false"
    var visibleSlides = $('.slick-slide[aria-hidden="false"]');
    //Make sure all of the visible slides have an opacity of 1
    $(visibleSlides).each(function() {
        $(this).css('opacity', 1);
    });
    //Set the opacity of the first and last partial slides.
    $(visibleSlides).first().prev().css('opacity', 0);
    $(visibleSlides).last().next().css('opacity', 0);
}



$('.slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    arrows : false,

    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 801,
            settings: {
                centerMode: false,
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 429,
            settings: {
                centerMode: false,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});
$(setSlideVisibility());

$('.slider').on('afterChange', function() {
    setSlideVisibility();
});



window.onscroll = function() {myFunction()};

function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}




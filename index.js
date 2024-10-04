$(document).ready(function(){
    $('.your-slider').slick({
        dots: true,          // Show dots for navigation
        infinite: true,      // Infinite loop sliding
        speed: 300,          // Transition speed
        slidesToShow: 3,     // Number of slides to show at once
        slidesToScroll: 1,   // Number of slides to scroll at a time
        arrows: true,        // Show arrows for navigation
        autoplay: true,      // Enable autoplay
        autoplaySpeed: 2000, // Autoplay speed in milliseconds
        responsive: [
            {
                breakpoint: 1220, // For screens less than 1024px
                settings: {
                    slidesToShow: 2, // Show 2 slides
                    slidesToScroll: 1 // Scroll 1 slide
                }
            },
            {
                breakpoint: 816 , // For screens less than 768px
                settings: {
                    slidesToShow: 1, // Show 1 slide
                    slidesToScroll: 1 // Scroll 1 slide
                }
            }
        ]
    });
});

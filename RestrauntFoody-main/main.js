$(window).scroll(function () { 
    $("nav").toggleClass("scrolled", $(this).scrollTop()>500);
    $(".logo").toggleClass("scrolled", $(this).scrollTop()>500);
    $(".navbar-light .navbar-nav .nav-link").toggleClass("scrolled", $(this).scrollTop()>600);
    $(".navbar-nav.ml-auto").toggleClass("scrolled", $(this).scrollTop()>500);
});



var btns = $(".navbar-light .navbar-nav .nav-link");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

$(window).scroll(function() {
    var distance = $(window).scrollTop();
    $('.page-section').each(function(i)    {
            if ($(this).position().top <= distance) 
            {
                    $('.navbar-nav a.active').removeClass('active');
                    $('.navbar-nav a').eq(i).addClass('active');
            }
        }
    );
}).scroll();

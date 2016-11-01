$('.toggleHeader').on('click', function() {
    var containerElm = $('.container.title');

    if(!containerElm.hasClass('maximized') && $(window).scrollTop() === 0)
    {
        $(document.body).animate({
            'scrollTop': containerElm.offset().top
        }, 800);
    }
    else if(containerElm.hasClass('maximized') && $(window).scrollTop() === containerElm.offset().top)
    {
        $(document.body).animate({
            'scrollTop': 0
        }, 800);
    }

    containerElm.toggleClass('maximized');
});

//Tooltips
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});
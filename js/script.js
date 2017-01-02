$('.toggleHeader').on('click', function() {
    var containerElm = $('.container.title'),
        newScrollTop = (!containerElm.hasClass('maximized')) ? containerElm.offset().top : 0;

    containerElm.addClass('animating');
    containerElm.toggleClass('maximized');

    $('[data-toggle="tooltip"]').tooltip('hide');

    $('html,body').animate({
        'scrollTop': newScrollTop
    }, 800, function() {
        containerElm.removeClass('animating');
    });
});

//Tooltips
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});
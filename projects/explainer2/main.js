$('.main').scroll(function() {
    $(this).find('.title').css('left', $(this).scrollLeft());
});
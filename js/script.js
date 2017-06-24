/**
 * Created by User on 13-Jun-17.
 */
var $body = $('body');
$('.js-menu-show').click(function() {
    $body.addClass('mobile-nav-show');
});

$('.js-menu-hide').click(function() {
    $body.removeClass('mobile-nav-show');
});


$('.faq__label').click(function(e) {
    var checkbox = $(this).siblings('.faq__checkbox');
    $('.faq__checkbox').not(checkbox).prop('checked',false);
})

//Select2 config
$('.plugin-select select').select2({
    minimumResultsForSearch: Infinity,
    templateResult: downloadSelectFormatter,
    templateSelection: downloadSelectFormatter
});

$('.feedback').owlCarousel({
    items: 1,
    dots: false,
    margin: 40,
    nav:true,
    navContainer: '.feedback__controls',
    navText: '',
    responsive: {
        850: {
            items: 2
        }
    }
    // navElement: 'button'
});

function downloadSelectFormatter(state) {
    console.log(state);
    if (!state.id) { return state.text; }
    var img = state.element.getAttribute("data-img");

    return $("<div><img src='"+img+"' class='plugin-select__icon'> <span class='plugin-select__title'>" + state.text + "</span></div>");
}
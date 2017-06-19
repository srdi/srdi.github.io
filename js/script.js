/**
 * Created by User on 13-Jun-17.
 */


//Select2 config
$('.plugin-select select').select2({
    minimumResultsForSearch: Infinity,
    templateResult: downloadSelectFormatter,
    templateSelection: downloadSelectFormatter
});

$('.feedback').owlCarousel({
    items: 2,
    dots: false,
    margin: 40,
    nav:true,
    navContainer: '.feedback__controls',
    navText: ''
    // navElement: 'button'
});

function downloadSelectFormatter(state) {
    console.log(state);
    if (!state.id) { return state.text; }
    var img = state.element.getAttribute("data-img");

    return $("<div><img src='"+img+"' class='plugin-select__icon'> <span class='plugin-select__title'>" + state.text + "</span></div>");
}
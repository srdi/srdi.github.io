/**
 * Created by User on 13-Jun-17.
 */

$('.faq__label').click(function(e) {
    var checkbox = $(this).siblings('.faq__checkbox');
    // var prevVal = radio.prop('data-prevVal');
    // // console.log(radio);
    // // console.log(prevVal);
    // if(!prevVal) {
    //     radio.prop('data-prevVal','true');
    // }
    // else{
    //     console.log(radio.prop('checked'));
    //     radio.prop('checked',false);
    //     radio.prop('data-prevVal',false);
    // }
    // e.preventDefault();
    $('.faq__checkbox').not(checkbox).prop('checked',false);
})

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
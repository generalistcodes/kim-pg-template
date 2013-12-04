(function ($) {
    var $sw = $('.rgrid'),
        $output = $('#output');

    $sw.on('hold tap swipe doubletap transformstart transform transformend dragstart drag dragend swipe release', function (event) {
        event.preventDefault();
        alert('tap');
    });

    // this is how you unbind an event
    /*$sw.on('swipe', function (event) {
        event.preventDefault();

        $sw.off('tap');
    });*/
}(jQuery));

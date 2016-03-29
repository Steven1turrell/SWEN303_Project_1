/**
 * Created by steve on 29/03/2016.
 */

var main = function() {
    console.log("Hi");
    $('#search-button').click(function() {
        console.log("fuck");
        $('.color-body').fadeOut(1000);
    });
    console.log("test");
};

$(document).ready(main());
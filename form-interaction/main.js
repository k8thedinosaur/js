'use strict';

$('#formName').blur(function () {
    var val = $(this).val();
    if (val.length >0) {
        $(this).addClass('okay').removeClass('error');
    } else {
        $(this).addClass('error').removeClass('okay');
    }
});

// $('#formEmail').blur(function () {
//     var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     if (re.test($(this).val())) {
//         $(this).addClass('okay').removeClass('error');
//     } else {
//         $(this).addClass('error').removeClass('okay');
//     }
// });

$('#formEmail').blur(function () {
    var val = $(this).val();
    if (val.indexOf('@') !== -1 && val.indexOf('.') !== -1) {
        $(this).addClass('okay').removeClass('error');
    } else {
        $(this).addClass('error').removeClass('okay');
    }
});

$('#submit').click(function () {
    $('#mainForm').append('<input type="hidden" name="price" value="6.00">').submit();
    return true;
});

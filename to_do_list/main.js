$("#enter").click(function () {
    var new_item = $("#newItem").val();
    $('#list').append("<li>" + new_item + "  <button class='finished'>\t&#10004;</button></li>");
});

// to remove item
// $("#list").on('click', '.finished', function () {
//     $(this).parent().remove();
// });

//to strikethrough item
$("#list").on('click', '.finished', function () {
    $(this).parent().css("text-decoration", "line-through");
});

$('#newItem').keypress(function (event) {
    if (event.which === 13) {
        $('#enter').click();
    }
});


var score = 0;
var timer;
var interval = 2000;
var clicks = 0;

function play() {
    var hole_arr = $('.hole');
    if (hole_arr.length > 0) {
        var random = Math.floor(Math.random() * hole_arr.length);
        console.log(random);
        $(hole_arr[random]).attr('src', 'mole.jpg').removeClass('hole').addClass('mole');
    } else {
        clearInterval(timer);
        alert('Your garden is completely overrun with vermin.');
    }
}

$('#start').click(function () {
    timer = setInterval(play, interval)
});

$('.img').click(function () {
    // var hole_arr = document.getElementsByClassName('hole');

    if ($(this).attr('src') === 'mole.jpg') {
        $(this).attr('src', 'hole.jpg').removeClass('mole').addClass('hole');
        score += 100;
        if (clicks === 9) {
            clicks = 0;
            interval -= 100;
            clearInterval(timer);
            timer = setInterval(play, interval);
        } else {
            clicks++;
        }
    } else {
        score -= 50
    }
});

$('img').on('dragstart', function () {
    event.preventDefault()
})
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
}


function showPosition (pos) {
    f(pos.coords.latitude, pos.coords.longitude);
}


function f (lat, lon) {
    $.ajax({
        url: "http://api.openweathermap.org/data/2.5/weather",
        type: 'GET',
        data: {
            APPID: "848e9a71a4b1c90877841baf319c1b68",
            lat: lat,
            lon: lon
        },
        success: function (response) {
            // $('#content').html(response)
            console.log(response)
        }
    });
}

f();
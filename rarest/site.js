obj = {
    'Alyssa': 22,
    'Charley': 25,
    'Dan': 25,
    'Jeff': 20,
    'Kasey': 20,
    'Kim': 20,
    'Morgan': 25,
    'Ryan': 25,
    'Stef': 22
};

function flip_dictionary(obj) {
    var dict = {};
    for (var entry in obj) {
        if (dict.hasOwnProperty(obj[entry])) {
            dict[obj[entry]].push(entry);
        } else {
            dict[obj[entry]] = [entry]
        }
    }
    return dict;
}


function findRarestValue(obj) {
    var dict = flip_dictionary(obj);
    var rarest = Number.POSITIVE_INFINITY;
    var rarestlen = Number.POSITIVE_INFINITY;
    for (var age in dict) {
        if (dict[age].length < rarestlen) {
            rarest = age;
            rarestlen = dict[age].length
        }
    }
    return rarest
}

function findRarestKeys(obj) {
    var dict = flip_dictionary(obj);
    var rarest = Number.POSITIVE_INFINITY;
    var rarestlen = Number.POSITIVE_INFINITY;
    for (var age in dict) {
        if (dict[age].length < rarestlen) {
            rarest = age;
            rarestlen = dict[age].length
        }
    }
    return rarest + ': ' + dict[rarest]
}
//
// function findRarestValue(obj) {
//     var dict = {};
//     for (var i = 0; i < obj.length; i++) {
//         console.log(obj[1])
//     }
// }
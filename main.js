'use strict';

/*int = 12314;
float = 0.1;
string = "Ahoy";
array = [123, 2.5, "thingy stuff"]
json = {"Key": "value"}
*/

// var fruit = ["apple", "orange", "banana"];
// var myName = 'Kate';
//
// function greeting(name) {
//     if (name === 'Kate') {
//         console.log('Hello, ' + name + '! Meow.')
//     } else if (name === 'Murray' || name === 'Mushka') {
//         console.log('You are a cat, ' + name + '.')
//     } else {
//         console.log("I don't know who you are.")
//     }
// }
//
// for (var i = 0; i < fruit.length; i++) {
//     console.log(fruit[i])
// }

var color;
// var name = prompt('What is your name?')
// alert('Hello, ' + name + '!')

// document.getElementById('submit').addEventListener('click', function () {
//     event.preventDefault();
//     color = document.getElementById('colorChoice').value;
//
//     document.body.style.backgroundColor = color;
//     document.getElementById("messageBox").innerHTML = "You picked " + color + ". Good choice!";
//     console.log(document.getElementById("messageBox").innerHTML)
// });


$("#submit").click(function () {
    event.preventDefault();

    color = $("#colorChoice").val();

    $("body").css("backgroundColor", color);
    $("#messageBox").html("You picked " + color + ". Good choice!")

});



// var thing = _.filter([1, 2, 3, 4, 5, 6], function (num) {
//     return num % 2 === 0;
// });
//
// console.log(thing);

// try {
//     console.log("error");
// } catch (ex) {
//     console.log(ex);
// }

// var p = prompt("Enter a number: ");
//
// var number = parseInt(p) + 2;

// String();

// console.log("The answer is " + number)

// console.log(isNaN(number));
// ...returns false because it's not not a number


// var r_num = Math.floor((Math.random() * 100) + 1);
//
// console.log(r_num);
//
// var name = "Kate";
//
// console.log(name.startsWith("K"));


// var namesToAges = {
//     'Kate': 29,
//     'Murray': 7,
//     'Mushka': 4
// }
//
// var names = ['Kate', 'Murray', 'Mushka'];
//
// function getAgeForName(name) {
//     return namesToAges[name];
// }
//
// console.log(names.map(getAgeForName));
//
//





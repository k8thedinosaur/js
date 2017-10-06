// 'use strict';
//
// //
// // /*int = 12314;
// // float = 0.1;
// // string = "Ahoy";
// // array = [123, 2.5, "thingy stuff"]
// // json = {"Key": "value"}
// // */
//
//
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
//
//
var color;
// var name = prompt('What is your name?')
// alert('Hello, ' + name + '!')

document.getElementById('submit').addEventListener('click', function () {
    event.preventDefault();
    color = document.getElementById('colorChoice').value;

    document.body.style.backgroundColor = color;
    document.getElementById("messageBox").innerHTML = "You picked " + color + ". Good choice!";
    console.log(document.getElementById("messageBox").innerHTML)
});


$("#submit").click(function () {
    event.preventDefault();

    color = $("#colorChoice").val();

    $("body").css("backgroundColor", color);
    $("#messageBox").html("You picked " + color + ". Good choice!")

});

//
// var thing = _.filter([1, 2, 3, 4, 5, 6], function (num) {
//     return num % 2 === 0;
// });
//
// console.log(thing);
//
// try {
//     console.log("error");
// } catch (ex) {
//     console.log(ex);
// }
//
// var p = prompt("Enter a number: ");
//
// var number = parseInt(p) + 2;
//
// String();
//
// console.log("The answer is " + number)
//
// console.log(isNaN(number));
// // ...returns false because it's not not a number
//
//
// var r_num = Math.floor((Math.random() * 100) + 1);
//
// console.log(r_num);
//
// var name = "Kate";
//
// console.log(name.startsWith("K"));
//
//
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
// var animalNoises = {
//     name: null,
//     age: 0,
//     makeDogNoise: function () {
//         return "berk";
//     },
//     makeCatNoise: function () {
//     return "mlem";
//     }
// }
//
// console.log(animalNoises.makeDogNoise());
// console.log(animalNoises.makeCatNoise());
//
// animalNoises.name = "Shelf Duck";
// console.log(animalNoises.name);
//
//
// var bankAccount = {
//     balance: 0,
//     deposit: function (amount) {
//         this.balance += amount;
//     }
// };
//
// bankAccount.deposit(200);
// console.log(bankAccount.balance);
//
//
// $("#submit").click(function() {
//     event.preventDefault();
//     console.log(this);
// });
//
//
// $(".colorBox").click(function () {
//     $(this).children().css("backgroundColor", "red")
// });
//
//
// function BankAccount(startingBalance) {
//     this.balance = startingBalance;
//     this.deposit = function (amount) {
//         this.balance += amount;
//     }
// }
//
// var Murray = new BankAccount(200);
//
// var Mushka = new BankAccount(100);
//
// console.dir(Murray);
// console.log(Mushka.balance);


var count = 1;

var timer;

function message() {
    $('#message').html('This has ran ' + count + ' times.');
    count++;
}

$('#start').click(function () {
    timer = setInterval(message, 1000);
});

$('#stop').click(function () {
    $('#message').html('This has ran 0 times.');
    clearInterval(timer);
    count = 1;
});



var timer = setInterval(function () {
    console.log("Hi");
}, 2000);


$(".colorBox").click(function () {
    clearInterval(timer);
    $(this).children().css("backgroundColor", "red");
});

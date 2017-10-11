// function BankAccount(startingBalance) {
//     this.balance = startingBalance;
//     this.deposit = function (amount) {
//         this.balance += amount;
//         console.log('Your balance is now ' + this.balance)
//     }
// }
//
// var withdrawProto = {
//     withdraw: function (amount) {
//         if (this.balance -amount >=0) {
//             this.balance -= amount;
//             console.log('Your balance is now ' + this.balance)
//         }
//     }
// };
//
// BankAccount.prototype = withdrawProto;
//
// var Kate = new BankAccount(200);
//
// Kate.withdraw(100);
//
// console.log(Kate.balance);

var die1 = new Die('dice');
var die2 = new Die('dice');

function Die () {
    this.value = 0;
    this.held = false;
    this.containterId = '#' + id;


    this.roll = function () {
        this.value = Math.floor(Math.random())
        this.random();

    }
}

die1.roll();
die2.roll();

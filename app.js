const account = require("./account");

console.log("Exports", account);
console.log("Account", account.transactions);

const newCustomer = account.transactions;

const customerBalance = newCustomer.deposit(250);

console.log(customerBalance);

const Account = require("./account").Account;

const newAccountCustomer = new Account();

newAccountCustomer.deposit(250);

console.log(newAccountCustomer.balance);
console.log(newAccountCustomer.withdraw(400));

console.log(newAccountCustomer.balance);

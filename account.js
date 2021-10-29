exports.add = add = (num1, num2) => {
	return num1 + num2;
};
let balance = 0;

const deposit = (cash) => {
	balance = balance + cash;
	return balance;
};
const withdraw = (cash) => {
	if (balance > cash) {
		balance = balance - cash;
	} else {
		return balance;
	}
};

exports.transactions = {
	deposit,
	withdraw,
	balance,
};

class Account {
	constructor() {
		this.balance = 0;
	}
	deposit(cash) {
		this.balance = this.balance + cash;
	}
	withdraw(cash) {
		if (balance > cash) {
			this.balance = this.balance - cash;
		} else {
			return "that transaction is not allowed";
		}
	}
	balance() {
		return this.balance;
	}
}

module.exports.Account = Account;

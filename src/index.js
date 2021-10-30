import { add } from "./add";
import subtract from "./subtract";
import multiply from "./multiply";

const button = document.querySelector(".btn-primary");
button.addEventListener("click", () => {
	let input_one = document.querySelector("#input1");
	let input_two = document.querySelector("#input2");
	let operation = document.querySelector("#operation").value;

	const { value: num1 } = input_one;
	const { value: num2 } = input_two;

	if (operation === "add") {
		alert(add(num1, num2));
	}
	if (operation === "sub") {
		alert(subtract(num1, num2));
	}
	if (operation === "mult") {
		alert(multiply(num1, num2));
	}
	input_one.value = "";
	input_two.value = "";
});

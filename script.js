const form = document.querySelector(".form");

const cookies = document.cookie;
const cookiesArr = cookies.split(";");

let obj = {};
if (cookies) {
	cookiesArr.forEach((c) => {
		const cookie = c.trim();
		const equal = cookie.indexOf("=");
		const key = cookie.substr(0, equal);
		const val = cookie.substr(equal + 1, cookie.length - equal);
		obj[key] = val;
	});
	document.querySelector("#email").value = obj.email;
	document.querySelector("#password").value = obj.password;
	document.querySelector("#forgot").checked = true;
}

form.addEventListener("submit", (e) => {
	let email = document.querySelector("#email").value;
	let password = document.querySelector("#password").value;
	let rememberMe = document.querySelector("#forgot").checked;

	if (rememberMe) {
		setCookie("email", email);
		setCookie("pwd", password);
		setCookie("save", "true");
	} else {
		deleteCookie("email");
		deleteCookie("pwd");
		deleteCookie("save");
	}
});

const deleteCookie = (key) => {
	document.cookie = `${key}=""; expires = Thu, 01 Jan 1970 00:00:00 GMT`;
};

const setCookie = (key, value) => {
	document.cookie = `${key} = ${value};`;
};

const viewCookies = () => {
	console.log(document.cookie);
};

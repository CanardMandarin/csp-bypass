/*
	Classic scenario where you can just inject in the DOM wihtout any kind of restriction.

	This will look for any element with the attribute CSP and evaluate it.

	Example:
	- <a csp="alert(1)"></a>
	- <a csp-base64="YWxlcnQoJzInKQ=="></a>
*/
import Sval from 'sval'

const options = {
  ecmaVer: 9,
  sandBox: false,
}

const interpreter = new Sval(options)

window.addEventListener("load", () => {
	let payloads = document.querySelectorAll('[csp]');
	for (let payload of payloads) {
	  interpreter.run(payload.attributes['csp'].value);
	}

	// Base 64 encoded version
	payloads = document.querySelectorAll('[csp-base64]');
	for (let payload of payloads) {
	  interpreter.run(atob(payload.attributes['csp-base64'].value));
	}
});
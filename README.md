# easy-csp-bypass

Just a fun project to see if this code can end up in some CDN, so it would be easier to exploit XSS with CSP.

## How to use ?

Well, it depends.
If you are lucky enough to find unsafe-eval in the CSP configuration, you can use those scenario:

- Classic => /dist/classic.js
- Classic-infinite => /dist/classic-infinite.js
- Url => /dist/url.js

If you can't use eval() because unsafe-eval is not in the configuration, well it's not over !!
I made a small interpreter that does not use the eval() function. 
I'm planning to make it a little more complexe so you can execute almost any javascript code you want !
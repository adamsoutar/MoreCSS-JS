# MoreCSS JS

## What are MORE and MoreCSS JS?

[MORE](http://morecss.org) is (sort of) a CSS superset definition written for an
April fools joke. It is highly human-readable and, as a result, quite hard to
compile. As a challenge, and since April is approaching, I felt like trying to
transpile it in JavaScript, in the browser, on the page that needs the styles.

## How to use

MoreCSS JS isn't finished yet, so you can't use it like is implied in the original
documentation, but you can use the bits of it that work at the moment like this:
```javascript
let transpiler = new MoreCSSTranspiler(`
  /* More styles here */
`)
let plainCSS = transpiler.transpile()
```

## Todo

Unsupported features of MoreCSS:
 - Comments (or any line that isn't valid MORE syntax)
 - Browser prefixing enforcement
 - Most fractions

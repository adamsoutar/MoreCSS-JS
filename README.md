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
const transpiler = new MoreCSSTranspiler(`
  /* More styles here */
`)
const plainCSS = transpiler.transpile()
```

## Supported spec features

#### !unimportant

```
div colour: red;
div colour: green !unimportant;
```
to:
```css
div {
    color: red !important;
    color: green;
}
```

#### Semantic numbers

```
h3 top: one-hundred-and-fourty-three pixels;
```
to:
```css
h3 {
    top: 143px !important;
}
```

#### PANTONE® Colour swatches

```
#about div.inner h3 background-colour: spot(PANTONE one-hundred-and-sixty-seven C) !unimportant;
```
to:
```css
#about div.inner h3 {
    background-color: rgb(190, 83, 28);
}
```

#### CMYK Colours

```
#about div.inner h3 colour: cmyk(zero, fifteen, fifty-three, fifty-three) !unimportant;
```
to:
```css
div.credit {
    background-color: rgb(30, 17, 0);
}
```

#### Brittish spelling enforcement

```
div colour: black;
div text-align: centre;
```
to:
```css
div {
    color: black !important;
    text-align: center !important;
}
```

## Todo

Unsupported features of MoreCSS:
 - Browser prefixing enforcement
 - Semantic fractions

#### MoreCSS: Write more, do less

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

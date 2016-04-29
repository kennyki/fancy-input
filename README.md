# Fancy Input
Custom radio &amp; checkbox input with CSS (only)

[DEMO HERE](https://jsfiddle.net/swqk9ze7/).

This is an improved version of what has been explained in this [blog post](http://www.sitepoint.com/replacing-radio-buttons-without-replacing-radio-buttons/). Where it:

1. Uses semantic HTML:
  - `<label>`
  - `<input type='radio/checkbox'>`
  - `<span>`
1. Has keyboard support:
  - Press tab to navigate
  - Press arrows to select
1. Has faint shadow to indicate focus state
1. Themable!!!
1. No Javascript, CSS only
1. No voodoo

## Installation
1. `bower install --save fancy-input`
1. Or just download **/dist/fancy-input.min.css**

## Usage
```
<label class='fancy-input balanced' for='my-fm'>
  <input type='checkbox' name='fm' id='my-fm' value='my-fm'/>
  <span>My FM</span>
</label>
<label class='fancy-input assertive' for='mix-fm'>
  <input type='checkbox' name='fm' id='mix-fm' value='mix-fm'/>
  <span>Mix FM</span>
</label>
<label class='fancy-input positive' for='hitz-fm'>
  <input type='checkbox' name='fm' id='hitz-fm' value='hitz-fm'/>
  <span>Hitz FM</span>
</label>

<br>
<br>

<label class='fancy-input dark' for='favorite'>
  <input type='radio' name='feeling' id='favorite' value='favorite'/>
  <span>Favorite</span>
</label>
<label class='fancy-input royal' for='least-favorite'>
  <input type='radio' name='feeling' id='least-favorite' value='least-favorite'/>
  <span>Least favorite</span>
</label>
<!-- default/without theme -->
<label class='fancy-input' for='nocomment'>
  <input type='radio' name='feeling' id='nocomment' value='nocomment'/>
  <span>No comment</span>
</label>
```

## Customize
1. Clone the repo
1. `npm install -g gulp`
1. `npm install`
1. Change the colors in ./src/_variables.scss
1. `gulp`
1. Check ./dist/fancy-input[.min].css

## FAQ

#### Sometimes the radio/checkbox is misaligned with the text
This is due to the `line-height`. Try modify it to fit:

```
label.fancy-input {
  <!-- originally 1.3em -->
  line-height: 0.6em;
}
```

#### Sometimes the radio buttons don't appear in perfect circle
This might be due to [browsers' rounding calculation](http://stackoverflow.com/questions/24070899/border-radius-50-not-producing-perfect-circles-in-chrome). Try modify the circle's height or width to fit:

```
label.fancy-input input + span:before {
  <!-- originally 1em -->
  height: 1.05em;
}
```
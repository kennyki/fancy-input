# fancy-input
Custom radio &amp; checkbox input with CSS (only)

This is an improved version of what has been explained in this [blog post](http://www.sitepoint.com/replacing-radio-buttons-without-replacing-radio-buttons/). Where it:

1. Uses semantic HTML:
  - `<label>`
  - `<input type='radio/checkbox'>`
  - `<span>`
1. Has keyboard support:
  - Press tab to navigate
  - Press arrows to select
1. Has faint shadow to indicate focus state
1. No Javascript, CSS only
1. No voodoo

## Installation
1. `bower install --save fancy-input`
1. Or just download **/dist/fancy-input.min.css**

## Usage
```
<label class='fancy-input' for='my-fm'>
  <input type='checkbox' name='fm' id='my-fm' value='my-fm'/>
  <span>My FM</span>
</label>
<label class='fancy-input' for='mix-fm'>
  <input type='checkbox' name='fm' id='mix-fm' value='mix-fm'/>
  <span>Mix FM</span>
</label>


<label class='fancy-input' for='favorite'>
  <input type='radio' name='feeling' id='favorite' value='favorite'/>
  <span>Favorite</span>
</label>
<label class='fancy-input' for='least-favorite'>
  <input type='radio' name='feeling' id='least-favorite' value='least-favorite'/>
  <span>Least favorite</span>
</label>
```

## Customize
1. Clone the repo
1. `npm install -g gulp`
1. `npm install`
1. Change the colors in ./src/_variables.scss
1. `gulp`
1. Check ./dist/fancy-input[.min].css

## TODO
1. Support easy theming - with just CSS
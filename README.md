# hypermd-twemoji

Use twemoji to display emojis

[Demo](https://hypermd.github.io/hypermd-twemoji/example/) | [GitHub](https://github.com/HyperMD/hypermd-twemoji) | [![NPM version](https://img.shields.io/npm/v/hypermd-twemoji.svg?style=flat-square)](https://npmjs.org/package/hypermd-twemoji)

> ⚠️ **License**
>
> Please follow https://github.com/twitter/twemoji#license if you use this powerpack.
> 使用前请注意阅读 twemoji 使用许可

## How to use

1. install `twemoji` and `hypermd-twemoji`
2. `import` before creating HyperMD editor
3. create HyperMD editor

### For webpack / parcel

First of all, install the packages: `npm install --save hypermd-twemoji twemoji`

```js
import * as HyperMD from "hypermd"
import "hypermd-twemoji"

const your_textarea = document.getElementById('input-box')
const editor = HyperMD.fromTextArea(your_textarea)
```

### For requirejs (example)

In your HTML:

```html
<textarea id="input-box" cols="30" rows="10">I'm using twemoji to render emojis! :tada:</textarea>

<script src="https://cdn.jsdelivr.net/npm/requirejs/require.js"></script> <!-- 👈 RequireJS -->
<script src="https://cdn.jsdelivr.net/npm/hypermd/goods/patch-requirejs.js"></script> <!-- 👈 IMPORTANT -->
<script data-main src="main.js"></script>
```

In your main.js

```js
// before defining your main entry, don't forget :
requirejs.config({
  packages: [
    { name: 'hypermd-twemoji', main: 'index.js' },
    { name: 'twemoji', main: '2/twemoji.min.js' },
  ]
})

// then, add "hypermd-twemoji" to your main-entry's dependency list.
```

Finally, here is [an example of `main.js`](./example/requirejs-main.js) and [a live demo](https://hypermd.github.io/hypermd-twemoji/example/).

### For Plain Browser Env

*Why hurting yourself? The bundlers and module loaders are the future!*

Add these HTML after loading HyperMD, before creating a editor.

```html
  <script src="https://cdn.jsdelivr.net/npm/twemoji/2/twemoji.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/hypermd-twemoji/index.js"></script>
```

See the source of [example file](./example/pbe-index.html)


## APIs

This module exports following symbols.

(In plain browser env, they are stored in global variable `HyperMD_PowerPack.twemoji`)

- `setOptions(options?)` -- set the optional option parameter for `twemoji.parse`
- `twemojiChecker` -- a EmojiChecker for HyperMD.FoldEmoji
- `twemojiRenderer` -- a EmojiRenderer for HyperMD.FoldEmoji


[twemoji]: https://twemoji.twitter.com/

requirejs.config({
  baseUrl: "https://cdn.jsdelivr.net/npm/",   // use CDN
  // baseUrl: "./node_modules/", // or use local version?

  packages: [
    { name: 'hypermd', main: 'everything.js' },
    { name: 'codemirror', main: 'lib/codemirror.js' },

    // ...

    // add this 2 lines to requirejs config.packages:
    { name: 'hypermd-twemoji', main: 'index.js' },
    { name: 'twemoji', main: '2/twemoji.min.js' },
  ]
})

//////////////////////////////////////////////////////////////////
// This part is for development. It's meaningless to you. Please delete it:
// 这一小段代码仅用于开发测试，对你没用。要拷贝代码时，记得删除：
if (location.search.indexOf('_hmd_dev_') !== -1) requirejs.config({ paths: { "hypermd-twemoji": "/." } })
//////////////////////////////////////////////////////////////////

require([
  "hypermd",
  "hypermd/goods/complete-emoji", // optionally, add Emoji AutoComplete

  // ...

  // add this to your dependencies:
  "hypermd-twemoji",
], function (HyperMD, CompleteEmoji) {
  var your_textarea = document.getElementById('input-box')
  var editor = HyperMD.fromTextArea(your_textarea, {
    // editor options go here
    // ...

    // Emoji AutoComplete config
    extraKeys: {
      "Ctrl-Space": "autocomplete",   // Use Ctrl+Space to
    },
    hintOptions: {
      hint: CompleteEmoji.createHintFunc()
    },
  })

  // show AutoComplete when ":" is inputed
  editor.on("inputRead", function (cm, change) {
    if (change.text.length === 1 && change.text[0] === ':') editor.showHint()
  })
})
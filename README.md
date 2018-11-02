# vue-hljs-lite

> Lightweight highlight.js Vue component

## Installation

```bash
npm install --save highlight.js vue-hljs-lite
```

[npm package link](https://www.npmjs.com/package/vue-hljs-lite)

## Setup & example

Inside your main.js:

The default highlight.js import imports all languages, it is therefore likely to be more efficient to import only the library and the languages you need.

```javascript
import hljs from 'highlight.js/lib/highlight';
import xml from 'highlight.js/lib/languages/xml';
hljs.registerLanguage('xml', xml);

import VueHljsLite from 'vue-hljs-lite';

Vue.use(VueHljsLite, { hljs });
```

Inside any component:

```html
<vue-hljs-lite :code="code" :language="'xml'"></vue-hljs-lite>
```

## Props

- **code**: the code to highlight and render.
- **language**: the highlight language.

## Size:

1.52 KiB

## Powered by

- Babel 7
- Webpack 4

## License

[MIT](http://opensource.org/licenses/MIT)

## Twitter

[Follow me on Twitter](https://twitter.com/KrolsBjorn)

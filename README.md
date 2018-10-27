# vue-hljs-lite

> Lightweight highlight.js Vue component

## Installation

```bash
npm install --save highlight.js vue-hljs-lite
```

[npm package link](https://www.npmjs.com/package/vue-hljs-lite)

## Setup & example

main.js

```javascript
// To reduce bundle size, we only import a subset of hljs
import hljs from 'highlight.js/lib/highlight';
import xml from 'highlight.js/lib/languages/xml';
hljs.registerLanguage('xml', xml);

import VueHljsLite from 'vue-hljs-lite';

Vue.use(VueHljsLite, { hljs });
```

Inside any component

```html
<vue-hljs-lite :code="code" :language="'xml'" />
```

## Powered by

- Babel 7
- Webpack 4

## License

[MIT](http://opensource.org/licenses/MIT)

## Twitter

[Follow me on Twitter](https://twitter.com/KrolsBjorn)

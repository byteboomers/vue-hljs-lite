# vue-hljs-lite

Lightweight highlight.js Vue component

## Installation

```bash
npm install --save highlight.js vue-hljs-lite
```

[npm package link](https://www.npmjs.com/package/vue-hljs-lite)

## Usage

Inside your main.js:

The default highlight.js import imports all languages, it is therefore likely to be more efficient to import only the library and the languages you need.

```javascript
import hljs from "highlight.js/lib/highlight";
import xml from "highlight.js/lib/languages/xml";
hljs.registerLanguage("xml", xml);

import VueHljsLite from "vue-hljs-lite";

Vue.use(VueHljsLite, { hljs });
```

Inside any component:

```html
<vue-hljs-lite :code="code" :language="'xml'"></vue-hljs-lite>
```

## Props

- **code**: the code to highlight.
- **language**: the language of the code to highlight.

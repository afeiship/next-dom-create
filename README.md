# next-dom-create
> Dom create for next.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-dom-create
```

## apis
| api      | params               | description           |
| -------- | -------------------- | --------------------- |
| element  | type,props, children | Create element node.  |
| text     | value                | Create text node.     |
| fragment | children             | Create fragment node. |

## usage
```js
import NxDomCreate from '@jswork/next-dom-create';

NxDomCreate.element(
  'div',
  { id: '1', style: 'color: red; font-size: 12px;' },
  'hello world.'
);

// <div id="1" style="color: red; font-size: 12px;">hello world.</div>
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-dom-create/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-dom-create
[version-url]: https://npmjs.org/package/@jswork/next-dom-create

[license-image]: https://img.shields.io/npm/l/@jswork/next-dom-create
[license-url]: https://github.com/afeiship/next-dom-create/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-dom-create
[size-url]: https://github.com/afeiship/next-dom-create/blob/master/dist/next-dom-create.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-dom-create
[download-url]: https://www.npmjs.com/package/@jswork/next-dom-create

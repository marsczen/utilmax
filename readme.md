<div align="center">
	<img src="https://raw.githubusercontent.com/cderek/utilmax/master/assets/logo.png" width="600px" alt="just logo img">
  <h1>utilmax</h1>
  <p>a library that provides useful utilities functions for TS/JS, pack with esbuild.</p>
</div>

## Features

- future-proofed - Written in TypeScript, supports Tree Shaking, ECMAScript Modules
- [Documented](https://cderek.github.io/utilmax/index.html)

### Installation:

```bash
$ npm install utilmax  --D
```

### Usage

```javascript
// 完整引入
import * as utilmax from "utilmax";
const env = utilmax.getEnvironment();
```

Best Practices

It is not necessary to introduce all the functions completely, so only the methods that need to be used can be introduced.

```javascript
import { getEnvironment } from "utilmax";
const env = getEnvironment();
```

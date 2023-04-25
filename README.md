![@typhonjs-fvtt/eslint-config-foundry.js](https://i.imgur.com/eVYXP9p.png)

[![NPM](https://img.shields.io/npm/v/@typhonjs-config/eslint-config?style=plastic)](https://www.npmjs.com/package/@typhonjs-config/eslint-config)
[![License](https://img.shields.io/badge/license-MIT-yellowgreen.svg?style=plastic)](https://github.com/typhonjs-config/eslint-config/blob/main/LICENSE)

## Overview
Provides shareable ESLint configs for TyphonJS projects covering standard ESM code formatting including 
`eslint-plugin-jsdoc` configuration. The current `eslint-plugin-jsdoc` dependency version is `^43`.

There are browser and Node configurations by year for ESM language level between 2017 and 2022. Additionally, there are
rules for `jsdoc/no-undefined-types` covering all Typescript types not included in `eslint-plugin-jsdoc`. 

## Recommended usage

Simply extend your local `.eslintrc` file as follows:
```json
{
  "extends": [
    "@typhonjs-config/eslint-config/esm/2022/node",
    "@typhonjs-config/eslint-config/esm/2022/no-undefined-types"
  ]
}
```

For browser oriented projects use `@typhonjs-config/eslint-config/esm/2022/browser` instead of `node`. There also is a 
`latest` entry that points to the latest year supported; IE `@typhonjs-config/eslint-config/esm/latest/node`.

Including `no-undefined-types` is optional and will require the use of [import types](https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html#import-types) 
across the target codebase for locally defined typedefs and all references used across local files.

## Roadmap
- Provide a way to scan the target codebase for typedefs and symbols to automatically generate a `definedTypes` rule 
  for `jsdoc/no-undefined-types` allowing local usage without the need for `import types` when using the 
  `no-undefined-types` configuration.  

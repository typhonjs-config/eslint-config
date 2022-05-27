## 0.3.4
- Added `memberof` & `readonly` to exceptions in tag-lines rule.

## 0.3.3
- Switched all operators for linebreak rule to `after`.

## 0.3.2
- Small fix to include es2021 environment in 2022 config.

## 0.3.1
- Small fix for invalid env ESM attributes for 2018 / 2019.

## 0.3.0
- upgraded for ESLint 8.x support.

## 0.2.7
- added 'type' to  "jsdoc/tag-lines"

## 0.2.6
- added 'private', 'protected', 'throws' to  "jsdoc/tag-lines"

## 0.2.5
- added 'ignore' to  "jsdoc/tag-lines"

## 0.2.4
- set `"settings": { "jsdoc": { "mode": "typescript" } }`
- set "jsdoc/tag-lines" to:
```
"jsdoc/tag-lines": ["warn", "always", {
   "noEndLines": true,
   "tags": {
      "inheritDoc": {"lines":"any"},
      "override": {"lines":"any"},
      "returns": {"lines":"any"},
      "see": {"lines":"any"}
   }
}]
```

## 0.2.3
- set `"jsdoc/tag-lines": ["warn", "always", { "noEndLines": true }]`
- set `"settings": { "jsdoc": { "mode": "permissive" } }`

## 0.2.2
- set quote-props to `["error", "as-needed", { "unnecessary": true }]`

## 0.2.1
- set `"jsdoc/no-undefined-types": "off"` in rules until a good solution for 
  https://github.com/gajus/eslint-plugin-jsdoc/issues/99 is available.

## 0.2.0
- Added eslint-plugin-jsdoc / recommended settings

## 0.1.0
- Initial release

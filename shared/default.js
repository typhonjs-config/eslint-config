module.exports = {
   "extends": ["eslint:recommended", "plugin:jsdoc/recommended"],

   "env": {
      "mocha": true
   },

   "globals":
   {
      "arguments": true
   },

   "settings": {
      "jsdoc": {
         "mode": "typescript"
      }
   },

   "rules": {
      /* JSDoc */
      "jsdoc/no-defaults": "off",
      "jsdoc/no-undefined-types": "off",
      "jsdoc/tag-lines": ["warn", "always", {
         "applyToEndTag": false,
         "startLines": 1,
         "tags": {
            "hidden": {"lines":"any"},
            "ignore": {"lines":"any"},
            "inheritDoc": {"lines":"any"},
            "link": {"lines":"any"},
            "override": {"lines":"any"},
            "memberof": {"lines":"any"},
            "package": {"lines":"any"},
            "private": {"lines":"any"},
            "protected": {"lines":"any"},
            "public": {"lines":"any"},
            "readonly": {"lines":"any"},
            "returns": {"lines":"any"},
            "see": {"lines":"any"},
            "throws": {"lines":"any"},
            "type": {"lines":"any"},
            "template": {"lines":"any"}
         }
      }],

      /* Architecture */
      "eqeqeq": "error",
      "no-array-constructor": "error",
      "no-console": "off",
      "no-new-object": "error",

      /* Styling */
      "array-bracket-spacing": "error",
      "block-spacing": "error",
      "brace-style": ["error", "allman", { "allowSingleLine": true }],
      "comma-spacing": "error",
      "comma-style": "error",
      "curly": "error",
      "key-spacing": "error",
      "keyword-spacing": "error",
      "new-parens": "error",
      "no-multiple-empty-lines": "error",
      "no-spaced-func": "error",
      "object-curly-spacing": ["error", "always"],
      "operator-assignment": ["error", "always"],
      "operator-linebreak": ["error", "after"],
      "semi": ["error", "always"],
      "sort-vars": ["error", { "ignoreCase": true }],
      "space-before-blocks": "error",
      "space-before-function-paren": ["error", {
         "anonymous": "never",
         "named": "never",
         "asyncArrow": "ignore"
      }],
      "space-in-parens": "error",
      "space-infix-ops": "error",
      "space-unary-ops": ["error", { "words": true, "nonwords": false }],
      "spaced-comment": ["error", "always"],
      "wrap-regex": "error",

      "quotes": ["off", "single", "avoid-escape"],
      "quote-props": ["error", "as-needed", { "unnecessary": true }]
   }
}

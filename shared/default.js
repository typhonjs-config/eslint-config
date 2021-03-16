module.exports = {
   "extends": ["eslint:recommended", "plugin:jsdoc/recommended"],

   "env": {
      "mocha": true
   },

   "globals":
   {
      "arguments": true
   },

   "rules": {
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
      "operator-linebreak": ["error", "before", {
         "overrides": {
            "+": "after",
            ":": "after",
            "?": "after",
            "||": "after",
            "&&": "after",
            "=": "after",
            "==": "after",
            "!=": "after",
            "===": "after",
            "!==": "after"
         }
      }],
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

      // Currently disabled as ESLint "error".x has this issue: https://github.com/eslint/eslint/issues/5"error"34
      "quotes": ["off", "single", "avoid-escape"],
      "quote-props": ["error", "consistent-as-needed", { "keywords": true }],
   }
}

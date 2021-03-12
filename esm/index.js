module.exports = {
   "extends": "../default/default.js",

   "rules": {
      /* ES6 */
      "arrow-body-style": "off",
      "arrow-parens": ["error", "always"],
      "arrow-spacing": "error",
      "constructor-super": "error",
      "generator-star-spacing": ["error", { "before": true, "after": false }],
      "no-class-assign": "error",
      "no-const-assign": "error",
      "no-dupe-class-members": "error",
      "no-this-before-super": "error",
      "no-var": "error",
      "object-shorthand": ["error", "properties"],
      "prefer-arrow-callback": "error",
      "prefer-const": "error",
      "prefer-spread": "error",
      "prefer-template": "error",
      "require-yield": "error",

      /* Unused ES6 rules */
      "prefer-reflect": "off"
   }
}

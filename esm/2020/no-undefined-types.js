module.exports = {
   "rules": {
      "jsdoc/no-undefined-types": ["warn", {
         "definedTypes": require('../../rules/no-undefined-types')(2020)
      }]
   }
}

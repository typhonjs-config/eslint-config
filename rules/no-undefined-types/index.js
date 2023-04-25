/**
 * Provides a utility function for `jsdoc/no-undefined-types` defining all extra Typescript types not included in
 * `eslint-plugin-jsdoc`.
 *
 * @param {2022 | 2021 | 2020 | 2019 | 2018 | 2017 | 2016 | 2015} year - The start year for TS types to include.
 *
 * @returns {string[]}
 */
module.exports = function definedTypes(year)
{
   if (libByYear[year] === void 0)
   {
      throw new Error(`@typhonjs-config/eslint-config; Unknown 'no-defined-types' year: ${year}`);
   }

   const types = [];

   for (; year >= 2015; year--) { types.push(...libByYear[year]); }

   return types;
};

const lib_2015 = [
   // lib.es5.d.ts - not included in current eslint-jsdoc-plugin base TS types. TODO: more to potentially add!
   'ArrayBufferConstructor',
   'ArrayBufferLike',
   'ArrayBufferView',
   'ArrayLike',
   'Awaited',
   'BooleanConstructor',
   'CallableFunction',
   'DataViewConstructor',
   'ErrorConstructor',
   'EvalErrorConstructor',
   'FunctionConstructor',
   'NewableFunction',
   'NumberConstructor',
   'ObjectConstructor',
   'PromiseLike',
   'PropertyDescriptor',
   'PropertyDescriptorMap',
   'PropertyKey',
   'RangeErrorConstructor',
   'ReadonlyArray',
   'ReferenceErrorConstructor',
   'RegExpExecArray',
   'RegExpMatchArray',
   'StringConstructor',
   'SyntaxErrorConstructor',
   'TypeErrorConstructor',
   'URIErrorConstructor',

   // lib.es2015.generator.d.ts
   'Generator',
   'GeneratorFunction',
   'GeneratorFunctionConstructor',

   // lib.es2015.iterable.d.ts
   'IteratorYieldResult',
   'IteratorReturnResult',
   'IteratorResult',
   'Iterator',
   'Iterable',
   'IterableIterator',

   // lib.es2015.promise.d.ts
   'PromiseConstructor',

   // lib.es2015.proxy.d.ts
   'Proxy',
   'ProxyHandler',

   // lib.es2015.symbol.d.ts
   'SymbolConstructor',
];

// No new types
const lib_2016 = [];

const lib_2017 = [
   // lib.es2017.intl.d.ts
   'Intl.DateTimeFormatPart',
   'Intl.DateTimeFormatPartTypes',
   'Intl.DateTimeFormatPartTypesRegistry',
   'Intl.DateTimeFormat',

   // lib.es2017.sharedmemory.d.ts
   'Atomics',
   'ArrayBufferTypes',
   'SharedArrayBuffer',
   'SharedArrayBufferConstructor',

   // lib.es2017.typedarrays.d.ts
   'Int8ArrayConstructor',
   'Uint8ArrayConstructor',
   'Uint8ClampedArrayConstructor',
   'Int16ArrayConstructor',
   'Uint16ArrayConstructor',
   'Int32ArrayConstructor',
   'Uint32ArrayConstructor',
   'BigInt64ArrayConstructor',
   'BigUint64ArrayConstructor',
   'Float32ArrayConstructor',
   'Float64ArrayConstructor'
];

const lib_2018 = [
   // lib.es2018.asyncgenerator.d.ts
   'AsyncGenerator',
   'AsyncGeneratorFunction',
   'AsyncGeneratorFunctionConstructor',

   // lib.es2018.asynciterable.d.ts
   'AsyncIterator',
   'AsyncIterable',
   'AsyncIterableIterator',

   // lib.es2018.intl.d.ts
   'Intl.LDMLPluralRule',
   'Intl.PluralRuleType',
   'Intl.PluralRulesOptions',
   'Intl.ResolvedPluralRulesOptions',
   'Intl.PluralRules',
   'Intl.ES2018NumberFormatPartType',
   'Intl.ES2020NumberFormatPartType',
   'Intl.NumberFormat',
   'Intl.NumberFormatPart',
   'Intl.NumberFormatPartTypes'
];

const lib_2019 = [
   // lib.es2019.array.d.ts
   'FlatArray',
];

const lib_2020 = [
   // lib.es2020.bigint.d.ts
   'BigIntConstructor',
   'BigIntToLocaleStringOptions',

   // lib.es2020.intl.d.ts -> eslint-plugin-jsdoc doesn't seem to complain about any 2020 extensions.

   // lib.es2020.promise.d.ts
   'PromiseFulfilledResult',
   'PromiseRejectedResult',
   'PromiseSettledResult'
];

const lib_2021 = [
   // lib.es2021.promise.d.ts
   'AggregateErrorConstructor',

   // lib.es2021.weakref.d.ts
   'FinalizationRegistryConstructor',
   'WeakRefConstructor',
];

const lib_2022 = [
   // lib.es2022.error.d.ts
   'ErrorOptions',

   // lib.es2022.regexp.d.ts
   'RegExpIndicesArray',
];

const libByYear = {
   2015: lib_2015,
   2016: lib_2016,
   2017: lib_2017,
   2018: lib_2018,
   2019: lib_2019,
   2020: lib_2020,
   2021: lib_2021,
   2022: lib_2022
};

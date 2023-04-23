const lib_2015 = [
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
   'IterableIterator'
];

const lib_2016 = [];

const lib_2017 = [
   // lib.es2017.intl.d.ts
   'Intl.DateTimeFormatPart',
   'Intl.DateTimeFormatPartTypes',
   'Intl.DateTimeFormatPartTypesRegistry',
   'Intl.DateTimeFormat',

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

const lib_2018 = [];
const lib_2019 = [];
const lib_2020 = [];
const lib_2021 = [];
const lib_2022 = [];

const libByYear = {
   2015: lib_2015,
   2016: lib_2016,
   2017: lib_2017,
   2018: lib_2018,
   2019: lib_2019,
   2020: lib_2020,
   2021: lib_2021,
   2022: lib_2022
}

module.exports = function definedTypes(year)
{
   return [...lib_2015, ...lib_2017];
};

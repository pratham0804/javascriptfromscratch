console.log(null >0)
console.log(null==0);
console.log(null >=0);

// The reason is that equality check == and comparisions > < >= <= work differently.
// Comparisions convert null to a number treating it as 0 .
// third condition is true.
// undefined ke comparision false hi derta.

// === is strict check .... also compares datatypes.

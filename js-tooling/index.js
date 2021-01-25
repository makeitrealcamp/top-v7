const greet = 'hola mundo';

console.log('hola mundo');

const arr = [1, 2, 3];

arr
  .map((el) => el * 3 + 5)
  .filter((el) => el > 0)
  .map((el) => el * 4 + 10)
  .filter((el) => el > 0);

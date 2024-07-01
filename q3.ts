function primeNumber(a : number) : undefined | Boolean{
  if(a <= 1){
    return false;
  }
  if(a === 2){
    return true;
  }
  if(a % 2 === 0){
    return false;
  }
  for(let i = 3; i < a; i++){
    if(a % i === 0){
      return false;
    }
    return true;
  }

}

const d1 : number = 10;
const d2 : number = 29;
const d3 : number = 2;

console.log(primeNumber(d1));
console.log(primeNumber(d2));
console.log(primeNumber(d3));

module.exports = primeNumber;

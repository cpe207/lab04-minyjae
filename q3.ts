function primeNumber(a : number) : void | boolean {
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
    else return true;
  }

}

const d1 = 10;
const d2 = 29;
const d3 = 2;

console.log(primeNumber(d1));
console.log(primeNumber(d2));
console.log(primeNumber(d3));

module.exports = primeNumber;

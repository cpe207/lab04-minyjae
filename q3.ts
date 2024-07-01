function primeNumber(a : number) : void |string{
  if(a <= 1){
    return "NO";
  }
  if(a === 2){
    return "YES";
  }
  if(a % 2 === 0){
    return "NO";
  }
  for(let i = 3; i < a; i++){
    if(a % i === 0){
      return "NO";
    }
    return "YES";
  }

}

const d1 : number = 10;
const d2 : number = 29;
const d3 : number = 2;

console.log(primeNumber(d1));
console.log(primeNumber(d2));
console.log(primeNumber(d3));

module.exports = primeNumber;

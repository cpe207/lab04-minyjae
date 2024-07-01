function arrayStringify(a :number[]) :string | null {
  let result = "";
    for (let i = 0; i < a.length; i++) {
      if(a.length === 0){
        return "";
      }
        result += a[i].toString();
    }
    return result;
}

const c1 :number[]= [1, 2, 3];
const c2 :number[]= [10, 9, 8, 7, 6, 5];
const c3 :number[]= [];

console.log(arrayStringify(c1));
console.log(arrayStringify(c2));
console.log(arrayStringify(c3));

module.exports = arrayStringify;

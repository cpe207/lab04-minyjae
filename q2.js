function arrayStringify(a) {
    var result = "";
    for (var i = 0; i < a.length; i++) {
        if (a.length === 0) {
            return "";
        }
        result += a[i].toString();
    }
    return result;
}
var c1 = [1, 2, 3];
var c2 = [10, 9, 8, 7, 6, 5];
var c3 = [];
console.log(arrayStringify(c1));
console.log(arrayStringify(c2));
console.log(arrayStringify(c3));
module.exports = arrayStringify;

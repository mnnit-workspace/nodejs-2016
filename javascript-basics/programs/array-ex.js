var arr = ['s', 'n', 'y', 'a', 'd'];
console.log(arr);

var idx = arr.indexOf("a");
arr.splice(idx, 1);

arr.push("r");

console.log(arr);
var obj = {name: "node", teacher: "Ravi", context: "MNNIT", year: "2015", sem: "second"};

console.log(obj);

 delete obj.sem;
 console.log(obj);

delete obj['year'];
console.log(obj);

var prop = "context";
delete obj[prop];
console.log(obj);
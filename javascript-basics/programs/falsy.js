var a1, a2, a3, a4, a5, a6;
a2 = null;
a3 = false;
a4 = NaN;
a5 = "";
a6 = {};

if(a1){
  console.log("Negative");
} else {
  console.log("a1");
}

if(a2){
  console.log("Negative");
} else {
  console.log("a2");
}

if(a3){
  console.log("Negative");
} else {
  console.log("a3");
}

if(a4){
  console.log("Negative");
} else {
  console.log("a4");
}

if(a5){
  console.log("Negative");
} else {
  console.log("a5");
}

//by default object is true, so negative will be printed
if(a6){
  console.log("Negative");
} else {
  console.log("a6");
}
function facto(num){
  var a=1, factorial=1;
  while(a <= num){
    factorial *= a;
    a++;
  }

  console.log(factorial);
}

facto(6);
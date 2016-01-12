function buji(i, done){
  i += 500;
  done(i);
}

var gt = 20;
buji(gt, function(val){
  console.log(val);
});
function iWaitYou(moreWait){
  setTimeout(function(){
    console.log("If you chase.");
    moreWait();
  }, 5000);
}

iWaitYou(function(){
  setTimeout(function(){
    console.log("They run away.");
  }, 5000);
});

var fs = require("fs");

fs.rename("ravi.txt", "boss.txt", function(err){
  if(err){
    console.log("error occurred");
  } else {
    console.log("Status upgraded!");
  }
});

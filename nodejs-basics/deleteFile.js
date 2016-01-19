var fs = require("fs");

fs.unlink("ravi.txt", function(err){
  if(err){
    console.log("error occurred");
  } else {
    console.log("Destruction is what i love!");
  }
});

var fs = require("fs");

fs.writeFile("ravi.txt", "Ravi is the best", function(err){
  if(err){
    console.log("oops... error occurred");
  } else {
    console.log("yay.... file created");
  }
});

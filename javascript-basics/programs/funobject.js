var obj = {
  name : "Ravi Shankar",
  showName : function(){
    return this.name;
  }
};

//this will tell you that it ia a function
console.log(obj.showName);

//this will actually do the intended tast
console.log(obj.showName());

//funobject.js
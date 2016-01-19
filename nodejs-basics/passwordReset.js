var crypto = require("crypto");

var token = crypto.randomBytes(48).toString("hex");

var link = "http://ravishankarkumar.com" + "/reset/" + token;

console.log(link);

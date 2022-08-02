var date = new Date();
var day = date.getDay();
var month = date.getMonth();
var year = date.getFullYear();
var h = date.getHours();
var m = date.getMinutes();
var s = date.getSeconds();

console.log(date);
console.log("Today's Date: " + day + "/" + month + "/" + year + ", " + h + ":" + m + ":" + s);
var now = new Date();
var next = new Date(now-5000);
console.log(now.toLocaleTimeString().replace(/^\D*/,''))
console.log(next.toLocaleTimeString())
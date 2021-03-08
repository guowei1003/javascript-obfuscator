function foo(b){
  return b + 1
}
function bar(a) {
  return a - 1
}
var a = foo(2)
var b = bar (a)

console.log(b === 2);

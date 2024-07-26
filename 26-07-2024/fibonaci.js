// function fib(n){
//     if(n==0) return 0;
//          else if(n==1 || n==2) return 1;
//             else{
//                 return fib(n-1)+fib(n-2);
//             }
// }
// console.log();
function fib(n) {
  let fibo = {};
  if (n in fibo) {
    return fibo[n];
  } else if (n == 0) {
    fibo[n] = 0;
    return 0;
  } else if (n == 1 || n == 2) {
    fibo[n] = 1;
    return 1;
  } else {
    fibo[n] = fib(n - 1) + fib(n - 2);
    return fib(n - 1) + fib(n - 2);
  }
}

console.log(fib(7));

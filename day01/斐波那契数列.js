// 回调函数  0 1 1 2 3 5 8 13 21 34 
// function Fib(n) {
//     if (n == 0) return 0
//     if (n == 1) return 1
//     return Fib(n - 1) + Fib(n - 2)
// }
// console.log(Fib(5));   //时间复杂度  为  2^n


// 简化斐波那契数列    时间复杂度

// let a = 0,
//     b = 1;

// function Fib(n) {
//     if (n == a) return 0
//     if (n == b) return 1
//     a = 1;
//     b = 2;
//     for (let i = 3; i < n; i++) {
//         [a, b] = [b, a + b]
//         console.log(a, b);
//     }
//     return b
// }
// console.log(Fib(7));
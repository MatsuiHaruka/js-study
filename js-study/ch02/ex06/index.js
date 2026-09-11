// FizzBuzz 問題の結果を文字列として返す関数を 1 行で書きなさい。1 から 100 まで繰り返すこと。文字列は与えられたテストを通過する形式にすること。

// 1行ではないもの
// export const fizzbuzz = () => {
//   const num = [];
//   for (let i = 1; i <= 100; i++) {
//     if (i % 15 === 0) {
//       num.push("FizzBuzz");
//     } else if (i % 5 === 0) {
//       num.push("Buzz");
//     } else if (i % 3 === 0) {
//       num.push("Fizz");
//     } else {
//       num.push(i);
//     }
//   }
//   return num.join("\n") + "\n";
// };

// 途中経過
// export const fizzbuzz = () => {
//   const num = Array.from({ length: 100 }, (_, index) =>
//     (index + 1) % 15 === 0
//       ? "FizzBuzz"
//       : (index + 1) % 5 === 0
//       ? "Buzz"
//       : (index + 1) % 3 === 0
//       ? "Fizz"
//       : index + 1,
//   );
//   return num.join("\n") + "\n";
// };

// prettier-ignore
export const fizzbuzz = () => Array.from({ length: 100 }, (_, index) => (index + 1) % 15 === 0 ? "FizzBuzz" : (index + 1) % 5 === 0 ? "Buzz" : (index + 1) % 3 === 0 ? "Fizz" : index + 1,).join("\n") + "\n";

// Unicode エスケープシーケンスをなるべく用いて"Hello,World"を出力するプログラムを書きなさい。
const hi =
  "\u0048\u0065\u006c\u006c\u006f\u002c\u0077\u006f\u0072\u006c\u0064\u0021";

console.log(hi); // => Hello,world!

// Node REPLを利用してみる

"H".codePointAt(0).toString(16); // => "48"
"e".codePointAt(0).toString(16); // => '65'
[..."Hello,world!"].map((c) => c.codePointAt(0).toString(16).padStart(4, "0"));
// => [ '0048', '0065',  '006c', '006c',  '006f', '002c',  '0077', '006f',  '0072', '006c',  '0064', '0021']

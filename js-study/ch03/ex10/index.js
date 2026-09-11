/*

`Symbol()` を使い、同じ文字列から生成された 2 個の `Symbol` 変数を作成し、それらをプロパティとして持つオブジェクトを作成しなさい。
そのオブジェクトに対して、作成した`Symbol`変数を使って各プロパティの値を取得しなさい。
また、`Symbol()`ではなく、`Symbol.for()`で同名の変数を作成した場合の挙動を確認しなさい。
*/

// Symbol()
const s1 = Symbol("symbol");
const s2 = Symbol("symbol");
console.log(s1 === s2); //=> false
// オブジェクトの作成
const o = {};
o[s1] = "symbol";
o[s2] = 2;
console.log(o[s1]); //=> symbol
console.log(o[s2]); //=> 2

// Symbol.for()
const s3 = Symbol.for("symbol");
const s4 = Symbol.for("symbol");
console.log(s3 === s4); //=> true
// オブジェクトの作成
o[s3] = "symbol";
o[s4] = 2; // s3とs4は同じキーなので、ここで上書きしてしまう
console.log(o[s3]); //=> 2
console.log(o[s4]); //=> 2

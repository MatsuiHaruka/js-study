/*
JavaScript の整数の最大値と最小値をコンソールに出力しなさい。なお最大値最小値は ES6 の `Number` のプロパティ定義を利用しなさい (3.2.3 参照)。
同様に最大値+1 をコンソールに出力しなさい。
最後に最大値+1 と最大値+2 を `===` で比較した結果をコンソールに出力し、そのように出力される理由を簡潔に文章で記載しなさい。
*/

console.log("最大値: " + Number.MAX_SAFE_INTEGER);
console.log("最小値: " + Number.MIN_SAFE_INTEGER);
console.log("最大値+1: " + (Number.MAX_SAFE_INTEGER + 1));
console.log("最大値+2: " + (Number.MAX_SAFE_INTEGER + 2));

console.log(
  "最大値+1 と最大値+2 を `===` で比較: " +
    (Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2),
);
// 安全に扱える整数の最大値を超えた値では、最大値+1と+2で丸め誤差が発生して同値となってしまうため比較時trueになっている。

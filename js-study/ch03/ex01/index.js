// 正負の ` Infinity` と `NaN` で `+`, `-`, `\*`, `/` の計算を全ての組み合わせでして結果を見なさい。

// 加算
console.log("■ 加算");
console.log("正のInfinity足す正のInfinity: " + (Infinity + Infinity));
console.log("正のInfinity足す負のInfinity: " + (Infinity + -Infinity));
// 「負のInfinity足す正のInfinity」は「正のInfinity足す負のInfinity」と同様のため省略
console.log("負のInfinity足す負のInfinity: " + (-Infinity + -Infinity));
console.log("正のInfinity足すNaN: " + (Infinity + NaN));
console.log("負のInfinity足すNaN: " + (-Infinity + NaN));
console.log("NaN足すNaN: " + (NaN + NaN));

// 減算
console.log("■ 減算");
console.log("正のInfinity引く正のInfinity: " + (Infinity - Infinity));
console.log("負のInfinity引く負のInfinity: " + (-Infinity - -Infinity));
console.log("正のInfinity引く負のInfinity: " + (Infinity - -Infinity));
console.log("負のInfinity引く正のInfinity: " + (-Infinity - Infinity));
console.log("正のInfinity引くNaN: " + (Infinity - NaN));
console.log("負のInfinity引くNaN: " + (-Infinity - NaN));
console.log("NaN引く正のInfinity: " + (NaN - Infinity));
console.log("NaN引く負のInfinity: " + (NaN - -Infinity));
console.log("NaN引くNaN: " + (NaN - NaN));

// 掛算
console.log("■ 掛算");
console.log("正のInfinity掛ける正のInfinity: " + Infinity * Infinity);
console.log("正のInfinity掛ける負のInfinity: " + Infinity * -Infinity);
// 「負のInfinity掛ける正のInfinity」は「正のInfinity掛ける負のInfinity」と同様のため省略
console.log("負のInfinity掛ける負のInfinity: " + -(Infinity * -Infinity));
console.log("正のInfinity掛けるNaN: " + Infinity * NaN);
console.log("負のInfinity掛けるNaN: " + -Infinity * NaN);
console.log("NaN掛けるNaN: " + NaN * NaN);

// 割算
console.log("■ 割算");
console.log("正のInfinity割る正のInfinity: " + Infinity / Infinity);
console.log("負のInfinity割る負のInfinity: " + -Infinity / -Infinity);
console.log("正のInfinity割る負のInfinity: " + Infinity / -Infinity);
console.log("負のInfinity割る正のInfinity: " + -Infinity / Infinity);
console.log("正のInfinity割るNaN: " + Infinity / NaN);
console.log("負のInfinity割るNaN: " + -Infinity / NaN);
console.log("NaN割る正のInfinity: " + NaN / Infinity);
console.log("NaN割る負のInfinity: " + NaN / -Infinity);
console.log("NaN割るNaN: " + NaN / NaN);

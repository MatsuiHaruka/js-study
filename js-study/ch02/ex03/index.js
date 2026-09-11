// "パン"を Unicode エスケープシーケンスで記述した文字列リテラルを
// NFC と NFD のそれぞれの形式で作ってください。💻

//  NFC (Normalization Form Canonical Composition)
const café = 1; //この定数の名前は、「caf\u{e9}」。

// NFD (Normalization Form Canonical Decomposition)
const café = 2; //この定数の名前は、「caf\u{301}」。

café; //=>1: この定数の値は、1。
café; //=>2: 見た目では区別できないこの変数は、異なる値を持つ。

//  NFCのパン
const パン = 1; //この定数の名前は、「\u{30D1}ン」。
パン; //=> 1

// NFDのパン
const パン = 2; //この定数の名前は、「ハ\u{309A}ン」。
パン; //=> 2

//――――――――――――――――――（ 回答 ）――――――――――――――――――
const nfc = "\u{30D1}ン";
const nfd = "ハ\u{309A}ン";

console.log(nfc);
console.log(nfd);

/*
`valueOf()`, `toString()` を持つクラスを定義しなさい。
そのクラスのインスタンスを作成し、`valueOf()`, `toString()` を直接呼び出さずにそれぞれの結果を出力するコードを書きなさい。
*/

class Example {
  valueOf() {
    return 3;
  }

  toString() {
    return "str";
  }
}

const obj = new Example();
console.log(obj + 1); // valueOf() が呼ばれる
console.log(`${obj}`); // toString() が呼ばれる

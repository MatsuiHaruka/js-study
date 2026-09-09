/*

文字頻度ヒストグラムのプログラムを参考にし、単語頻度を計算するクラス `WordHistogram` を作成しなさい。

文字列を単語に分割する際は以下のようなコードにしなさい:

```js
const matches = text.toLowerCase().matchAll(/\w+|\$[\d.]+|\S+/g);
const words = [...matches].map((r) => r[0]);
```
また `toString()` の一部を以下のように書き換えなさい:

```js
// 出現頻度 0.5% 以上を取得
entries = entries.filter((entry) => entry[1] >= 0.5);
// padStart で表示幅を揃える / # の数を n ではなく 10 * n に変更
const lines = entries.map(
  ([l, n]) =>
    `${l.padStart(10)}: ${"#".repeat(Math.round(10 * n))} ${n.toFixed(2)}%`,
);
```
*/

// このクラスでは、Mapを拡張して、キーがマップ上に存在しない時に、
// get()メソッドがnullの代わりに指定した値を返すようにする。
class DefaultMap extends Map {
  constructor(defaultValue) {
    super(); // 親クラスのコンストラクタを呼び出す。
    this.defaultValue = defaultValue; // デフォルト値を記憶する。
  }

  get(key) {
    if (this.has(key)) {
      return super.get(key);
    } else {
      return this.defaultValue;
    }
  }
}

// このクラスは、単語頻度を計算する。
class WordHistogram {
  constructor() {
    this.wordCounts = new DefaultMap(0); // 文字と文字数をマップする。
    this.totalWords = 0; // 全体の文字数。
  }

  // この関数は、text中の文字でヒストグラムを更新する。
  add(text) {
    // 文字列を単語に分割する
    const matches = text.toLowerCase().matchAll(/\w+|\$[\d.]+|\S+/g);
    const words = [...matches].map((r) => r[0]);

    // テキスト中の文字をループする。
    for (const character of words) {
      const count = this.wordCounts.get(character); // 直前の値を取得する。
      this.wordCounts.set(character, count + 1); // 1増やす。
      this.totalWords++;
    }
  }

  // ヒストグラムを文字列に変換して、ASCIIグラフィックとして表示する。
  toString() {
    // マップを、[キー、文字数]配列に変換する。
    let entries = [...this.wordCounts];

    // 文字数順にソートする。文字数が同じ場合は、アルファベット順でソートする。
    entries.sort((a, b) => {
      // ソート順を定義する関数。
      if (a[1] === b[1]) {
        // 文字数が同じ場合は、
        return a[0] < b[0] ? -1 : 1; // アルファベット順でソートする。
      } else {
        // 文字数が異なる場合は、
        return b[1] - a[1]; // 降順でソートする。
      }
    });

    // 文字数をパーセントに変換する。
    for (const entry of entries) {
      entry[1] = (entry[1] / this.totalWords) * 100;
    }

    // 出現頻度 0.5% 以上を取得
    entries = entries.filter((entry) => entry[1] >= 0.5);
    // padStart で表示幅を揃える / # の数を n ではなく 10 * n に変更
    const lines = entries.map(
      ([l, n]) =>
        `${l.padStart(10)}: ${"#".repeat(Math.round(10 * n))} ${n.toFixed(2)}%`,
    );

    // 各行を改行文字で区切って結合し、結合した文字列を返す。
    return lines.join("\n");
  }
}

// このasync関数(Promiseを返す関数)は、Histogramオブジェクトを生成する。
// 標準入力からテキストを非同期に読み出し、読み出したテキストをヒストグラムに
// 追加する。テキストを最後まで読み出したら、ヒストグラムを返す。
async function histramFromStdin() {
  process.stdin.setEncoding("utf-8"); // バイと列ではなく、Unicode文字列を読む。
  const histogram = new WordHistogram();
  for await (const chunk of process.stdin) {
    histogram.add(chunk);
  }
  return histogram;
}

// この最後の一行がこのプログラムのmain部分。
// 標準入力からHistogramオブジェクトを生成し、ヒストグラムを表示する。
histramFromStdin().then((histogram) => {
  console.log(histogram.toString());
});

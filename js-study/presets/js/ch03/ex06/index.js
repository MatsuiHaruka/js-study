/*
[String.prototype.slice()](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/slice) と同等の結果を返す関数を自作しなさい。
第一引数に対象の文字列を受け取り、第二引数以降に元のメソッドの第一引数以降を受け取るものとする。
[ex06/index.test.js](./ex06/index.test.js) のテストを全てパスするように index.js (または index.ts) を作成しなさい。
*/
export function slice(str, indexStart, indexEnd) {
  const max = str.length;
  let start = 0;
  let end = str.length; // デフォルトでは末尾

  // startの処理
  if (indexStart !== undefined) {
    // 少数点以下切り捨て
    indexStart = Math.trunc(indexStart);

    if (indexStart < 0) {
      // 負の値が渡されたら後ろから数えた位置にする
      start = max + indexStart;
    } else {
      // 正の値が渡された場合
      start = indexStart;
    }

    // indexStartが不正な値の場合(負の値が大きすぎる場合)は0にする
    if (max + indexStart < 0) {
      start = 0;
    }

    // indexStartをstr文字数が最大値とする
    if (max < indexStart) {
      start = max;
    }
  }
  if (Number.isNaN(indexStart)) {
    start = 0;
  }

  // endの処理
  if (indexEnd !== undefined) {
    // 少数点以下切り捨て
    indexEnd = Math.trunc(indexEnd);

    if (indexEnd < 0) {
      // 負の値が渡されたら後ろから数えた位置にする
      end = max + indexEnd;
    } else {
      // 正の値が渡された場合
      end = indexEnd;
    }

    // indexEndが不正な値の場合(負の値が大きすぎる場合)は0にする
    if (max + indexEnd < 0) {
      end = 0;
    }

    // indexEndをstr文字数が最大値とする
    if (max < indexEnd) {
      end = max;
    }
  }
  if (Number.isNaN(indexEnd)) {
    end = 0;
  }

  // 文字列を配列にする
  const array = Array.from(str);

  // 文字列にてstarからendまでの値を全て取り出す
  const result_array = [];
  for (let i = 0; i < end - start; i++) {
    result_array.push(array[start + i]);
  }

  // 取り出した配列を文字に変換して返す
  const result = result_array.join("");

  return result;
}

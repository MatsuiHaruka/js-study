/*
オブジェクトが可変であることと、オブジェクトが参照で比較されることを以下のコードを書いて確認しなさい:
*/

const obj1 = { x: 1 };
// 問題: ここに1行コードを書くことで以下の行で {x: 1, y: 2} が出力されること
obj1.y = 2;
console.log(obj1);

const obj2 = { x: 1, y: 2 };
// 問題: 以下の行では何が出力されるか、予想してから結果を確認しなさい
console.log(obj1 === obj2);

// 予想：false
// 理由：別々のオブジェクトは等しいと判定されないため。

// 結果：false

/*
次に引数で与えられた2つのオブジェクト `o1` と `o2` を比較する関数 `equals` を以下の仕様に従って作成しなさい:

1. `o1` と `o2` が [厳密に等価](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Strict_equality) である場合 `true` を返す。
2. `o1` または `o2` に `null` またはオブジェクト以外が指定された場合 `false` を返す (`tyepof` の返り値が `object` かどうかを確認しなさい)
3. `o1` と `o2` のプロパティの数・名前が一致しない場合は `false` を返す
4. `o1` と `o2` のプロパティの各値を `equals` で比較し、全て `true` ならば `true` を返し、1つでも `false` があれば `false` を返す

参考: 以下の挙動を参考にしなさい:

// 厳密等価なら true
equals(42, 42); // true
equals(null, null); // true

// 厳密等価ではない場合オブジェクト以外が指定されれば false
equals({ x: 42 }, 42); // false
equals(null, { x: 42 }); // false

// プロパティの数・名前が一致しなければ false
equals({ x: 1 }, { y: 1 }); // false
equals({ x: 1 }, { x: 1, y: 1 }); // false

// プロパティの各値を equals で再帰的に比較
equals({ x: { y: { z: 10 } } }, { x: { y: { z: 10 } } }); // true
equals({ x: { y: { z: 10 } } }, { x: { y: { z: 10, w: 1 } } }); // false

*/
export function equals(o1, o2) {
  // o1とo2が厳密に等価
  if (o1 === o2) {
    return true;
  }

  // o1またはo2にnullまたはオブジェクト以外が指定された場合 false
  if (typeof o1 !== "object" || o1 == null) {
    return false;
  }
  if (typeof o2 !== "object" || o1 == null) {
    return false;
  }

  // o1とo2のプロパティの数・名前が一致しない場合 false
  // オブジェクトのプロパティ数を比較
  if (Object.keys(o1).length !== Object.keys(o2).length) {
    return false;
  }
  // オブジェクト名前を比較
  if (!Object.keys(o1).every((key) => key in o2)) {
    return false;
  }

  // o1とo2のプロパティの各値をequalsで比較し、全てtrueならばtrueを返し
  // 1つでもfalseがあればfalseを返す

  if (Object.keys(o1).every((key) => equals(o1[key], o2[key]))) {
    return true;
  } else {
    return false;
  }
}

/*
`==`, `<=`, の演算子と同等の挙動を取る関数 `eq` および `lte` を作成しなさい。

[ex13/index.test.js](./ex13/index.test.js) のテストを全てパスするように index.js (または index.ts)を作成しなさい。

3 章で説明されている各型 (ただし `BigInt` 及び `Symbol` は考慮しなくて良い) や自作クラスに対しても同等の挙動を取るようにしなさい。

作成する関数の内部実装については以下の条件に従いなさい。

- 同値演算子 `===` を利用して良い
- 基本型値同士の比較に関しては `<` 演算子を利用して良い
- 文字列を数値に変換するのに `Number()` を利用して良い
- 最新の ECMA の抽象関係比較アルゴリズムの仕様では、オブジェクト型値から基本型値への変換に `Symbol.ToPrimitive` を利用することになっているが、
解答では書籍に記載された型変換アルゴリズムを利用すること
*/

export function eq(a, b) {
  // 完全一致
  if (a === b) {
    return true;
  }

  // aとbのそれぞれがnull/undefinedだった場合
  // aがnullの場合
  if (a === null) {
    // bがnullかundefined
    if (b === null || b === undefined) {
      return true;
    }
    return false;
  }
  // aがundefinedの場合
  if (a === undefined) {
    // bがnullかundefined
    if (b === null || b === undefined) {
      return true;
    }
    return false;
  }
  // bがnullの場合
  if (b === null) {
    // aがnullかundefined
    if (a === null || a === undefined) {
      return true;
    }
    return false;
  }
  // bがundefinedの場合
  if (b === undefined) {
    // aがnullかundefined
    if (a === null || a === undefined) {
      return true;
    }
    return false;
  }

  // aがobject
  let aIsObject = false;
  if (typeof a === "object") {
    aIsObject = true;
  }
  // bがobject
  let bIsObject = false;
  if (typeof b === "object") {
    bIsObject = true;
  }

  // 両方が非objectの場合
  if (!aIsObject && !bIsObject) {
    // 文字列をnumberに型変換
    if (Number(a) === Number(b)) {
      return true;
    }
  }

  // 両方がobject(すなわち片方だけobject)の場合は変換する
  if ((aIsObject && !bIsObject) || (!aIsObject && bIsObject)) {
    // もしDateならtoString
    if (a instanceof Date || b instanceof Date) {
      if (a.toString() === b.toString()) {
        return true;
      }
      return false;
    }

    // nunmberに型変換
    if (typeof a === "object") {
      a = Number(a);
    }

    if (typeof b === "object") {
      b = Number(b);
    }

    if (a === b) {
      return true;
    }
  }

  return false;
}

export function lte(a, b) {
  // 完全一致
  if (a === b) {
    return true;
  }

  // 単純な比較
  if (a < b) {
    return true;
  }

  // aとbのそれぞれがnull/undefinedだった場合
  // aがnullの場合
  if (a === null && b === null) {
    // bがnull
    if (b === null) {
      return true;
    }
    return false;
  }

  // aとbが共にnullの場合
  if (a === null && b === null) {
    return true;
  }

  // aとbが共にundefinedの場合
  if (a === undefined && b === undefined) {
    return true;
  }

  // aもしくはbがundefinedの場合
  if (a === undefined || b === undefined) {
    return false;
  }

  // aがnullの場合
  if (a === null) {
    a = 0;
  }

  // bがnullの場合
  if (b === null) {
    b = 0;
  }

  // aがobject
  let aIsObject = false;
  if (typeof a === "object") {
    aIsObject = true;
  }
  // bがobject
  let bIsObject = false;
  if (typeof b === "object") {
    bIsObject = true;
  }

  // 両方が非objectの場合
  if (!aIsObject && !bIsObject) {
    // 文字列をnumberに型変換
    if (Number(a) === Number(b)) {
      return true;
    }
  }

  // 両方がobject(すなわち片方だけobject)の場合は変換する
  if ((aIsObject && !bIsObject) || (!aIsObject && bIsObject)) {
    // もしDateならtoString
    if (a instanceof Date || b instanceof Date) {
      if (a.toString() === b.toString()) {
        return true;
      }
      return false;
    }

    // もしstringならNumberに型変換
    if (typeof a === "object") {
      a = Number(a);
    }
    if (typeof b === "object") {
      b = Number(b);
    }

    if (a === b) {
      return true;
    }
    if (a < b) {
      return true;
    }
  }

  return false;
}

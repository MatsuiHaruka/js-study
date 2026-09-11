/*
JavaScript は動的な型付け言語だと言われる。
書籍 P48 の `equalArrays` は、引数に配列を受け取ることが想定されているが、実際には異なる型の値を渡すことも可能である
 (例えば `equalsArray("42", "A")` はエラーを返さず `false` を返す)。

では、2 つの値が等価性を満たしていないにも関わらず、 `equalsArray` の返り値が `true` になるような引数の例を作ることはできるだろうか。
[ex07/index.test.js](./ex07/index.test.js) のテストが成功するような、任意の定数 `x`, `y` を実装しなさい。

*/
import { equalArrays } from "./index.js";
import { test, expect } from "vitest";

test("ch03-ex07", () => {
  const x = 1; // ここの数字を何に変更しても成功してしまう
  const y = 2; // ここの数字を何に変更しても成功してしまう

  expect(equalArrays(x, y)).toBe(true);
  expect(x).not.toEqual(y);
});

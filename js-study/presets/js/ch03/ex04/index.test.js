/*
文字名 `"Hundred Points Symbol"` の絵文字表現 `"💯"` に対して `length` の値を確認するテストコードを書きなさい。
また、utf-16 コードポイント表現 `"\uD83D\uDCAF"`、utf-32 コードポイント表現 `"\u{0001F4AF}"` が絵文字と同値であることをテストコードで確認しなさい。
*/
import { describe, it, expect } from "vitest";

describe("比較", () => {
  it("文字名 `Hundred Points Symbol` の絵文字表現 `💯` に対して `length` の値を確認する", () => {
    expect("💯".length).toBe(2);
  });

  it("utf-16 コードポイント表現 \uD83D\uDCAF、utf-32 コードポイント表現 \u{0001F4AF} が絵文字と同値であること", () => {
    expect(`💯`).toBe(`\uD83D\uDCAF`);
    expect(`💯`).toBe(`\u{0001F4AF}`);
  });
});

/*
以下は必須
- `(0.3 - 0.2, 0.1) -> true`
- `(0.2 - 0.1, 0.1) -> true`
*/

import { describe, it, expect } from "vitest";
import { equ } from "./index.js";

describe("比較", () => {
  it("値を比較する", () => {
    expect(equ(0, 0)).toEqual(true);
  });

  it("値を比較する(0.3 - 0.2, 0.1)", () => {
    expect(equ(0.3 - 0.2, 0.1)).toEqual(true);
  });

  it("値を比較する(0.2 - 0.1, 0.1)", () => {
    expect(equ(0.2 - 0.1, 0.1)).toEqual(true);
  });

  it("値を比較する(異なる値)", () => {
    expect(equ(0.2 - 0.1, 0.5)).toEqual(false);
  });
});

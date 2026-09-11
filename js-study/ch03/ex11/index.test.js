import { equals } from "./index.js";
import { it, describe, expect } from "vitest";

describe("equals", () => {
  it("厳密に等価", () => {
    expect(equals(2, 2)).toEqual(true);
  });

  it("null", () => {
    expect(equals(null, 2)).toEqual(false);
  });

  it("object以外", () => {
    expect(equals({ x: 42 }, 42)).toEqual(false);
  });

  it("プロパティの数が一致しない", () => {
    expect(equals({ x: 1 }, { x: 1, y: 1 })).toEqual(false);
  });

  it("プロパティの名前が一致しない", () => {
    expect(equals({ x: 1 }, { y: 1 })).toEqual(false);
  });

  it("再帰的な比較(true)", () => {
    expect(equals({ x: { y: { z: 10 } } }, { x: { y: { z: 10 } } })).toEqual(
      true,
    );
  });

  it("再帰的な比較(false)", () => {
    expect(
      equals({ x: { y: { z: 10 } } }, { x: { y: { z: 10, w: 1 } } }),
    ).toEqual(false);
  });
});

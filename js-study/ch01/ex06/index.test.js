import { describe, it, expect } from "vitest";
import { fib } from "./index.js";

describe("abs", () => {
  it("フィボッチ数を計算する(0)", () => {
    expect(fib(0)).toBe(0);
  });
  it("フィボッチ数を計算する(1)", () => {
    expect(fib(1)).toBe(1);
  });

  it("フィボッチ数を計算する(小さな値)", () => {
    expect(fib(5)).toBe(5);
  });

  it("フィボッチ数を計算する(大きな値)", () => {
    expect(fib(75)).toBe(2111485077978050);
  });
});

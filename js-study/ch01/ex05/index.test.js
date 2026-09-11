import { describe, it, expect } from "vitest";
import { abs, sum, factorial } from "./index.js";

describe("math", () => {
  describe("abs", () => {
    it("returns same value when positive value given", () => {
      expect(abs(42)).toBe(42);
    });

    it("returns negated value when negative value given", () => {
      expect(abs(-42)).toBe(42);
    });

    it("returns zero value when zero given", () => {
      expect(abs(0)).toBe(0);
    });
  });

  // 以下に sum, factorial のテストを記載せよ

  describe("sum", () => {
    it("二つの正の数が与えられるとその合計を返す", () => {
      expect(sum(1, 2)).toBe(3);
    });
  });

  describe("factorial", () => {
    it("階乗を返す", () => {
      expect(factorial(4)).toBe(24);
    });
  });
});

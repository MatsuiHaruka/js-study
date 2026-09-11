import { describe, it, expect } from "vitest";
import { convertToLF, convertToCR } from "./index.js";

describe("変換", () => {
  it("文字列中の改行コードを`LF`→`CR+LF`に変換する", () => {
    expect(convertToLF(`てすと\nあめんぼ\nあかいな\nあいうえお`)).toBe(
      `てすと\r\nあめんぼ\r\nあかいな\r\nあいうえお`,
    );
  });

  it("文字列中の改行コードを`CR+LF`→`LF`に変換する", () => {
    expect(convertToCR(`てすと\r\nあめんぼ\nあかいな\r\nあいうえお`)).toBe(
      `てすと\nあめんぼ\nあかいな\nあいうえお`,
    );
  });
});

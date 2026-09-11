import { describe, it, expect } from "vitest";
import { Point } from "./index.js";

describe("Point", () => {
  it("原点からの距離を計算する(0,0)", () => {
    const p = new Point(0, 0);
    expect(p.distance()).toBe(0);
  });

  it("原点からの距離を計算する(3,4)", () => {
    const p = new Point(3, 4);
    expect(p.distance()).toBe(5);
  });

  it("インスタンスの座標を自分の座標に加算する(0,0)", () => {
    const p = new Point(0, 0);
    const other = new Point(0, 0);
    expect(p.add(other)).toEqual({ x: 0, y: 0 });
  });

  // it("インスタンスの座標を自分の座標に加算する(0,0)_個別", () => {
  //   const p = new Point(0, 0);
  //   const other = new Point(0, 0);
  //   expect(p.add(other).x).toEqual(0);
  //   expect(p.add(other).y).toEqual(0);
  // });

  it("インスタンスの座標を自分の座標に加算する", () => {
    const p = new Point(1, 2);
    const other = new Point(3, 4);
    expect(p.add(other)).toEqual({ x: 4, y: 6 });
  });

  // it("インスタンスの座標を自分の座標に加算する_個別", () => {
  //   const p = new Point(1, 2);
  //   const other = new Point(3, 4);
  //   expect(p.add(other).x).toEqual(4);
  //   expect(p.add(other).y).toEqual(6);
  // });
});

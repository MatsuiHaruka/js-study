// テキスト10頁を参考にする。
export function abs(abs) {
  // 0が与えられた場合、0を返す
  if (abs == 0) {
    return 0;
  }

  // 正の値が与えられた場合、同じ値を返す
  if (abs >= 0) {
    return abs;
  }

  // 負の値が与えられた場合、負の値を返す
  if (0 >= abs) {
    abs = abs * -1;
    return abs;
  }
}

// 足し算
export function sum(x, y) {
  return x + y;
}

// 階乗
export function factorial(n) {
  let product = 1;
  while (n > 1) {
    product *= n;
    n--;
  }
  return product;
}

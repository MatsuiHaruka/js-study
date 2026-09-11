/* eslint-disable */
for (i = 0; i < 10; i++) {
  (function () {
    i = 100;
  })();
  console.log(i);
}
console.log(i);

// `node ch03/ex14/index-nolet.cjs`で実行

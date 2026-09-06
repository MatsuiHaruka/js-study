> 以下のコードを実行するとどのように表示されるか予想した後で実行しなさい。なぜそのような実行結果になったのか説明しなさい。


予想：
```
0
1
2
3
4
5
6
7
8
9
9
```

```js
for (let i = 0; i < 10; i++) { // 10回繰り返し
  (function () {let i = 100;})(); 
  console.log(i);
}
console.log(i);
```

結果：
```
0
1
2
3
4
5
6
7
8
9
file:///C:/Users/r23000062/js_study/js-study/presets/js/ch03/ex14/index.js:8
console.log(i);
            ^

ReferenceError: i is not defined
    at file:///C:/Users/r23000062/js_study/js-study/presets/js/ch03/ex14/index.js:8:13
    at ModuleJob.run (node:internal/modules/esm/module_job:439:25)
    at async node:internal/modules/esm/loader:643:26
    at async asyncRunEntryPointWithESMLoader (node:internal/modules/run_main:101:5)

Node.js v24.19.0
```

説明：最後の`console.log(i);`はforループの外側にあり、変数iが存在しない。そのためiが見つからず、エラーになる。


---


> また、コード内の全ての `let` を `var` に変えた場合と、全ての `let` を消した場合 (非 `strict` モードでのみ実行可能) ではどうなるでしょうか。それら結果の理由についても説明しなさい。


letをvarに変えた場合の結果：
```
0
1
2
3
4
5
6
7
8
9
10
```

全てのletを消した場合の結果：
```
100
101
```

理由：varを使って変数を宣言した場合、その変数はブロックスコープを持たず関数スコープになるため、ループの外でもiが残り、エラーを起こさなくなる。letもvarもない場合、最初のi=0;代入時に暗黙的なグローバル変数iが1つ生成されるだけで、その後新たなグローバル変数を生成しない。ループ内でもグローバル変数iをそのまま100へ書き換えているだけであるため、出力結果の通りになる。
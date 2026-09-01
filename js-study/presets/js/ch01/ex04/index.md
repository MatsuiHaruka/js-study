> 開発者ツールのコンソール上に何が表示されるか

## 予想
```
42
0
```

実行前にコードを1行ずつ読んでみる。
lifeという変数を宣言する。オブジェクト名lifeの中身はプロパティ名answer、値42。
コンソールログlifeを出力。中身は42。
lifeオブジェクトのプロパティanswerにアクセスし、値に0を代入。
コンソールログlifeを出力。中身は0。

## 結果

開発者ツールを開いた状態のタブで HTML を開く場合
```
{answer: 42}
{answer: 0}
```

HTML を開いた状態のタブで開発者ツールを開く場合
```
answer: 0
answer: 0
```

→一致しなかった。出力されるのは値だけであると勘違いしていたが、プロパティ名等も出力されていた。また、開発ツール起動時と開発ツール起動状態でリロードした場合で結果が異なった。

> 常に期待した結果を得るためにはどのようにコードを修正すべきか

```html
<!DOCTYPE html>
<html>
  <body>
    <script>
      let life = { answer: 42 };
      console.log(life);
      life.answer = 0;
      console.log(life);
    </script>
  </body>
</html>
```

を修正して

```html
<!DOCTYPE html>
<html>
  <body>
    <script>
      let life = { answer: 42 };
      console.log(life.answer);
      life.answer = 0;
      console.log(life.answer);
    </script>
  </body>
</html>
```
とすれば、プロパティ名も指定するのでコンソール出力結果がブレない。
```html
<!doctype html>
<html>
  <body>
    <script>
      let life = { answer: 42 };
      console.log("answer: " + life.answer);
      life.answer = 0;
      console.log("answer: " + life.answer);
    </script>
  </body>
</html>
```
など記載しておけば何が出力されているかもわかりやすい。
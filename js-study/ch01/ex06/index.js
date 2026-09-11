export function fib(fib) {
  // フィボナッチ数(直前の2つの数字を足し合わせて次の数字を作るという規則で並ぶ数)
  let num = 1; //フィボナッチ数は1から始まる。
  let first = 0;
  let second = 1;
  if (fib == 0) {
    // 基本は1で始まるはずだが、0で始まる例も見かけたので対応しておく
    num = 0;
  }

  while (fib > 1) {
    num = first + second;
    first = second;
    second = num;
    fib--;
  }
  return num;
}

/* 
メモ

そもそもフィボナッチ数とは何か？検索
> フィボナッチ数とは、
> 直前の2つの数字を足し合わせて次の数字を作るという規則
> (1, 1, 2, 3, 5, 8, 13, 21...）で並ぶ数のことです。

以下思考整理

fib(8)なら
1,1,2,3,5,8,13,21だから、
①1,②(0+①),③(①+②),④(②+③),⑤(③+④),⑥(④+⑤),⑦(⑤+⑥),⑧(⑥+⑦)I

予想：一個前をfirst、2個前をsecondとして進めれば値が出せそう
num=first+second
②から③になる時、
secondだったものがfirstに入れられて、②がsecondに入るから
second=num;
first=second;

途中上手く値が出なかったので、以下のようにconsoleログで確認しつつ修正した。
正しい値が出なかった理由は、
    first = second;
    second = num;
  の行順が逆になっており、値の変わってしまったsecondを代入していたためだった。

  while (fib > 1) {
    console.log(
      "※処理前 fib: " +
        fib +
        " first: " +
        first +
        " second: " +
        second +
        " 値: " +
        num,
    );
    num = first + second;
    first = second;
    second = num;
    fib--;
  }

*/

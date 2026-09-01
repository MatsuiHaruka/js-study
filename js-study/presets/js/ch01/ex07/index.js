export class Point {
  constructor(x, y) {
    //新しいインスタンスを初期化するコンストラクタ関数
    this.x = x; // thisキーワードで、初期化中のオブジェクトを参照できる
    this.y = y; // 関数の引数をオブジェクトのプロパティとして保存する
    // return文は必要ない
  }

  distance() {
    // 原点からの距離を計算するメソッド
    return Math.sqrt(
      // 平方根(xの二乗+yの二乗)を返す
      this.x * this.x + // thisが参照しているのは
        this.y * this.y, // distanceメソッドが呼び出されているオブジェクト
    );
  }

  add(other) {
    // 引数として渡された `Point` クラスのインスタンスの座標を自分の座標に加算するメソッド

    //x座標の加算をする
    const newX = this.x + other.x;

    //y座標の加算をする
    const newY = this.y + other.y;

    const result = new Point(newX, newY); // 座標(x,y)

    return result; //x座標y座標をまとめて返す。

    // thisが参照しているのはaddメソッドが呼び出されているオブジェクト
  }
}

//「new」キーワードとPoint()コンストラクタ関数を使って、Pointオブジェクトを生成する
const p = new Point(1, 1); // 座標(1,1)

//「new」キーワードとPoint()コンストラクタ関数を使って、Pointオブジェクトを生成する
const other = new Point(3, 5); // 座標(3,5)

// PointオブジェクトのPメソッドを使う
p.distance(); //=>Math.SQRT2

// Pointオブジェクトのaddメソッドを使う
p.add(other); //=>座標(4,6)

// 確認用
// console.log(p.add(other));

/*
メモ

## 課題
> `Point` クラスに対し、引数として渡された `Point` クラスのインスタンスの座標を自分の座標に加算するメソッド `add` を定義

## 疑問: 「自分の座標」って何？
- 引数のインスタンスの座標 → 分かる（渡されたPointインスタンスの x, y）
- でも「自分の座標」って、どっちの x, y のこと？

## this のルール
- this が参照しているのは「そのメソッドが呼び出されているオブジェクト」
- 「呼び出されているオブジェクト」＝メソッドを呼ぶときにドットの前に書いたオブジェクトのこと
- 呼び出し方によって this の中身が決まる（定義した場所では決まらない）
- 例: `p1.add(p2)` と呼び出した場合、add の中では this === p1

## 結論
- this.x / this.y → 「自分」＝呼び出し元（例: p1）の座標
- other.x / other.y → 引数で受け取った、もう一方のインスタンス（otherという名前で受け取る）の座標
*/

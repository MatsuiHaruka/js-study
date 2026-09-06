/*
文字列中の改行コードを`LF`→`CR+LF`に変換する関数と`CR+LF`→`LF`に変換する関数をそれぞれ作成しなさい。
また、テストコードを書いて、それらの関数が正しく動作していることを確認しなさい。
*/

// 文字列中の改行コードを`LF`→`CR+LF`に変換する関数
export function convertToLF(text) {
  const CRLF = text.replaceAll("\n", "\r\n");
  return CRLF;
}
// 文字列中の改行コードを`CR+LF`→`LF`に変換する関数
export function convertToCR(text) {
  const LF = text.replaceAll("\r\n", "\n");
  return LF;
}

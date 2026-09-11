import * as acorn from "acorn";
import { writeFileSync } from "node:fs";

// 解析したいJavaScriptのコード
const code0 = "1 + 1;";
const code1 = "let a; a = 3; console.log(a);";
const code2 = "let a\n a\n =\n 3\n console.log(a)";

// ASTに変換
const ast0 = acorn.parse(code0, { ecmaVersion: 2020 });
const ast1 = acorn.parse(code1, { ecmaVersion: 2020 });
const ast2 = acorn.parse(code2, { ecmaVersion: 2020 });

// JSON出力
writeFileSync("ch02/ex08/ast0.json", JSON.stringify(ast0, null, 2));
writeFileSync("ch02/ex08/ast1.json", JSON.stringify(ast1, null, 2));
writeFileSync("ch02/ex08/ast2.json", JSON.stringify(ast2, null, 2));

// コンソール出力
console.log(JSON.stringify(ast0, null, 2));
// console.log(JSON.stringify(ast1, null, 2));
// console.log(JSON.stringify(ast2, null, 2));

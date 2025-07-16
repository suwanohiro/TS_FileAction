# swn-file-action

ファイル操作を簡単に行う TypeScript ユーティリティです。

## インストール

```
npm install swn-file-action
```

## 使い方

```ts
import FileAction from "swn-file-action";
FileAction.Read("path/to/file.txt");
```

## メソッド一覧

| メソッド        | 説明                                         | 引数                                                                   | 戻り値     |
| --------------- | -------------------------------------------- | ---------------------------------------------------------------------- | ---------- |
| ConvertFileLink | 相対パスを絶対パスに変換します。             | currentFilePath: string                                                | string     |
| Read            | テキストファイルを読み込み、内容を返します。 | currentFilePath: string                                                | string     |
| ReadCSV         | CSV ファイルを 2 次元配列で返します。        | currentFilePath: string                                                | string[][] |
| Write           | テキストファイルに書き込み（上書き/追記）。  | currentFilePath: string, writeString: string, fileReadMode: "w" \| "a" | なし       |
| WriteAdd        | テキストファイルに追記します。               | currentFilePath: string, writeString: string                           | なし       |
| WriteNew        | テキストファイルに上書きします。             | currentFilePath: string, writeString: string                           | なし       |
| Clear           | テキストファイルの内容を空にします。         | currentFilePath: string                                                | なし       |

## テスト

```
npm test
```

## ライセンス

MIT

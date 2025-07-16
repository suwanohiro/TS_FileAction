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
| ReadJSON<T>     | 型指定で JSON ファイルを読み込みます。       | currentFilePath: string                                                | T          |
| Write           | テキストファイルに書き込み（上書き/追記）。  | currentFilePath: string, writeString: string, fileReadMode: "w" \| "a" | なし       |
| WriteAdd        | テキストファイルに追記します。               | currentFilePath: string, writeString: string                           | なし       |
| WriteNew        | テキストファイルに上書きします。             | currentFilePath: string, writeString: string                           | なし       |
| WriteJSON<T>    | 型指定で JSON ファイルを書き込みます。       | currentFilePath: string, obj: T, space?: number                        | なし       |
| Clear           | テキストファイルの内容を空にします。         | currentFilePath: string                                                | なし       |

## テスト

```
npm test
```

## 更新履歴

| バージョン | 日付       | 主な変更内容                                                   |
| ---------- | ---------- | -------------------------------------------------------------- |
| 1.1.1      | 2025-07-16 | publish 時に自動でビルド＆テストするスクリプト追加             |
| 1.1.0      | 2025-07-16 | JSON ファイルの読み書き機能（ReadJSON<T>, WriteJSON<T>）を追加 |
| 1.0.0      | 2025-07-16 | 初回リリース。テキスト・CSV ファイル操作機能を実装             |

## ライセンス

MIT

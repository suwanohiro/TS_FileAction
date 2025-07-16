import * as path from "path";
import * as fs from "fs";

/**
 * ファイル操作ユーティリティクラス
 */
export default class FileAction {
    /**
     * 相対パスを絶対パスに変換する
     * @param currentFilePath 相対パス
     * @returns 絶対パス
     */
    static ConvertFileLink(currentFilePath: string): string {
        const base = path.dirname(process.argv[1]);
        const name = path.resolve(base, currentFilePath);
        return name;
    }

    /**
     * テキストファイルの読み込み
     * @param currentFilePath 相対パス
     * @returns ファイルのテキスト内容
     */
    static Read(currentFilePath: string): string {
        const filePath = this.ConvertFileLink(currentFilePath);
        return fs.readFileSync(filePath, { encoding: "utf-8" });
    }

    /**
     * CSVファイルを読み込み2次元配列を返す
     * @param currentFilePath 相対パス
     * @returns 2次元配列にしたCSVファイルのデータ
     */
    static ReadCSV(currentFilePath: string): string[][] {
        const textData = this.Read(currentFilePath);
        const array = textData.split("\n");
        const result: string[][] = array.map(line => line.split(","));
        return result;
    }

    /**
     * テキストファイルに書き込む
     * @param currentFilePath 相対パス
     * @param writeString 書き込むテキストデータ
     * @param fileReadMode ファイルの読み込みモード ('w' or 'a')
     */
    static Write(currentFilePath: string, writeString: string, fileReadMode: "w" | "a"): void {
        const filePath = this.ConvertFileLink(currentFilePath);
        fs.writeFileSync(filePath, writeString, { encoding: "utf-8", flag: fileReadMode });
    }

    /**
     * テキストファイルに追記
     * @param currentFilePath 相対パス
     * @param writeString 書き込むテキストデータ
     */
    static WriteAdd(currentFilePath: string, writeString: string): void {
        this.Write(currentFilePath, writeString, "a");
    }

    /**
     * テキストファイルに上書き
     * @param currentFilePath 相対パス
     * @param writeString 書き込むテキストデータ
     */
    static WriteNew(currentFilePath: string, writeString: string): void {
        this.Write(currentFilePath, writeString, "w");
    }

    /**
     * テキストファイルの中身をクリアする
     * @param currentFilePath 相対パス
     */
    static Clear(currentFilePath: string): void {
        this.WriteNew(currentFilePath, "");
    }
}
import FileAction from "../src/index";
import * as fs from "fs";
import * as path from "path";

// プロジェクトルート基準でテストファイルパスを作る
const TEST_DIR = path.resolve(__dirname);
const TEST_SUBDIR = "test";
const TEST_FILE = path.join(TEST_DIR, `${TEST_SUBDIR}/test.txt`);
const TEST_CSV = path.join(TEST_DIR, `${TEST_SUBDIR}/test.csv`);

beforeAll(() => {
    const testDirPath = path.join(TEST_DIR, TEST_SUBDIR);
    if (!fs.existsSync(testDirPath)) {
        fs.mkdirSync(testDirPath);
    }
    fs.writeFileSync(TEST_FILE, "Hello World");
    fs.writeFileSync(TEST_CSV, "a,b,c\n1,2,3");
});

afterAll(() => {
    fs.unlinkSync(TEST_FILE);
    fs.unlinkSync(TEST_CSV);
    const testDirPath = path.join(TEST_DIR, TEST_SUBDIR);
    if (fs.existsSync(testDirPath)) {
        fs.rmdirSync(testDirPath, { recursive: true });
    }
});
describe("FileAction", () => {
    const TEST_JSON = path.join(TEST_DIR, `${TEST_SUBDIR}/test.json`);
    type TestType = { foo: string; bar: number };
    const testObj: TestType = { foo: "hello", bar: 42 };

    test("WriteJSON writes object as JSON", () => {
        FileAction.WriteJSON<TestType>(TEST_JSON, testObj);
        const raw = fs.readFileSync(TEST_JSON, { encoding: "utf-8" });
        expect(raw).toContain('"foo":');
        expect(raw).toContain('"bar":');
    });

    test("ReadJSON reads object with type", () => {
        const obj = FileAction.ReadJSON<TestType>(TEST_JSON);
        expect(obj).toEqual(testObj);
        expect(typeof obj.foo).toBe("string");
        expect(typeof obj.bar).toBe("number");
    });

    test("Read returns file content", () => {
        expect(FileAction.Read(TEST_FILE)).toBe("Hello World");
    });

    test("WriteNew overwrites file", () => {
        FileAction.WriteNew(TEST_FILE, "New Content");
        expect(FileAction.Read(TEST_FILE)).toBe("New Content");
    });

    test("WriteAdd appends to file", () => {
        FileAction.WriteAdd(TEST_FILE, " Plus");
        expect(FileAction.Read(TEST_FILE)).toBe("New Content Plus");
    });

    test("Clear empties file", () => {
        FileAction.Clear(TEST_FILE);
        expect(FileAction.Read(TEST_FILE)).toBe("");
    });

    test("ReadCSV returns 2d array", () => {
        expect(FileAction.ReadCSV(TEST_CSV)).toEqual([["a", "b", "c"], ["1", "2", "3"]]);
    });
});
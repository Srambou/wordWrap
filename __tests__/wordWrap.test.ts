import { wrapWord } from "../src/wordWrap"

describe("wordWrap", () => {
    it("should retun '' when paragraph is '' and column number is 1", () => {
        expect(wrapWord('', 1)).toEqual('');
    })
    it("should retun 'x' when paragraph is 'x' and column number is 1", () => {
        expect(wrapWord('x', 1)).toEqual('x');
    })
    it("should retun 'x\nx' when paragraph is 'xx' and column number is 1", () => {
        expect(wrapWord('xx', 1)).toEqual('x\nx');
    })
    it("should retun 'x\nx' when paragraph is 'xx' and column number is 1", () => {
        expect(wrapWord('xx', 1)).toEqual('x\nx');
    })
    it("should retun 'x\nx\nx' when paragraph is 'xxx' and column number is 1", () => {
        expect(wrapWord('xxx', 1)).toEqual('x\nx\nx');
    })
    it("should retun 'jean\nluc' when paragraph is 'jean luc' and column number is 4", () => {
        expect(wrapWord('jean luc', 4)).toEqual('jean\nluc');
    })
})
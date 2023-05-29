import { wrapWord } from "../src/wordWrap"

describe("wordWrap", () =>{
    it("should retun '' when paragraph is '' and column number is 1", () =>{
      expect(wrapWord('',1)).toEqual('');
    })
})
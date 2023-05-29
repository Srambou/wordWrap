export function wrapWord(paragraph:string, columnNumber: number): string {
    if(paragraph.length>columnNumber){
        paragraph = paragraph.substring(0,columnNumber)+'\n'+paragraph.substring(columnNumber);
    }
    return paragraph;
}